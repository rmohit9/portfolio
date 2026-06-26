from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Allow your React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Default Vite port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GITHUB_USERNAME = "rmohit9"

@app.get("/api/github-profile")
def get_github_profile():
    # 1. Fetch User Profile Data
    user_url = f"https://api.github.com/users/{GITHUB_USERNAME}"
    user_response = requests.get(user_url)
    
    if user_response.status_code != 200:
        raise HTTPException(status_code=user_response.status_code, detail="Failed to fetch GitHub profile")
        
    user_data = user_response.json()

    # 2. Fetch User Repositories
    repos_url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos?sort=updated&per_page=6"
    repos_response = requests.get(repos_url)
    
    if repos_response.status_code != 200:
        raise HTTPException(status_code=repos_response.status_code, detail="Failed to fetch repositories")
        
    repos_data = repos_response.json()

    # 3. Shape the exact data package your frontend needs
    return {
        "profile": {
            "name": user_data.get("name"),
            "avatar_url": user_data.get("avatar_url"),
            "bio": user_data.get("bio"),
            "followers": user_data.get("followers"),
            "following": user_data.get("following"),
            "company": user_data.get("company"),
            "location": user_data.get("location")
        },
        "repos": [
            {
                "id": repo["id"],
                "name": repo["name"],
                "description": repo["description"],
                "html_url": repo["html_url"],
                "language": repo["language"],
                "stargazers_count": repo["stargazers_count"],
                "forks_count": repo["forks_count"]
            }
            for repo in repos_data
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)