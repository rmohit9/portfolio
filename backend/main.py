import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import re

app = FastAPI()

# Allow your React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5173", "http://127.0.0.1:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GITHUB_USERNAME = "rmohit9"

# In-memory cache to prevent hitting GitHub API rate limits
CACHE_DURATION_SECS = 300  # 5 minutes
cache = {
    "timestamp": 0,
    "data": None
}

# Fallback data in case of complete API failure or rate limit
FALLBACK_PROFILE = {
    "name": "Mohit Raut",
    "avatar_url": "https://github.com/rmohit9.png",
    "bio": "Building intelligent and scalable AI Solutions",
    "followers": 24,
    "following": 14,
    "company": "PartexAI",
    "location": "Pune, India"
}

FALLBACK_REPOS = [
    {
        "id": 1175781790,
        "name": "Caption-Generator",
        "description": "A deep learning model base that generates captions for images.",
        "html_url": "https://github.com/rmohit9/Caption-Generator",
        "language": "JavaScript",
        "stargazers_count": 0,
        "forks_count": 1
    },
    {
        "id": 1112480366,
        "name": "Faq_RAG_Chatbot",
        "description": "A Retrieval-Augmented Generation chatbot system configured to answer FAQs utilizing vector storage matching.",
        "html_url": "https://github.com/rmohit9/Faq_RAG_Chatbot",
        "language": "HTML",
        "stargazers_count": 0,
        "forks_count": 0
    },
    {
        "id": 1139590233,
        "name": "Email_Verifier",
        "description": "A utility validation engine that verifies email addresses check structure, domain registers and SMTP signals.",
        "html_url": "https://github.com/rmohit9/Email_Verifier",
        "language": "HTML",
        "stargazers_count": 0,
        "forks_count": 0
    },
    {
        "id": 1070106322,
        "name": "Healthcare-Portal",
        "description": "A health administration dashboard containing telemetry check schedules, doctor catalogs and diagnostic logs.",
        "html_url": "https://github.com/rmohit9/Healthcare-Portal",
        "language": "Python",
        "stargazers_count": 0,
        "forks_count": 0
    }
]

def fetch_pinned_repo_names():
    pinned_repos = []
    try:
        url = f"https://github.com/{GITHUB_USERNAME}"
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
        res = requests.get(url, headers=headers, timeout=5)
        if res.status_code == 200:
            html = res.text
            pinned_blocks = re.findall(r'<li[^>]*class="[^"]*pinned-item-list-item[^"]*"[^>]*>(.*?)</li>', html, re.DOTALL)
            for block in pinned_blocks:
                repo_link = re.search(r'href="/rmohit9/([a-zA-Z0-9_\-\.]+)"', block)
                if repo_link:
                    repo_name = repo_link.group(1)
                    if repo_name not in pinned_repos:
                        pinned_repos.append(repo_name)
    except Exception:
        pass
    
    if not pinned_repos:
        pinned_repos = ['Caption-Generator', 'Faq_RAG_Chatbot', 'Email_Verifier', 'Healthcare-Portal']
    return pinned_repos

@app.get("/api/github-profile")
def get_github_profile():
    global cache
    now = time.time()
    
    if cache["data"] is not None and (now - cache["timestamp"] < CACHE_DURATION_SECS):
        return cache["data"]
        
    try:
        user_url = f"https://api.github.com/users/{GITHUB_USERNAME}"
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
        user_response = requests.get(user_url, headers=headers, timeout=5)
        
        if user_response.status_code != 200:
            return {
                "profile": FALLBACK_PROFILE,
                "repos": FALLBACK_REPOS
            }
            
        user_data = user_response.json()
        pinned_names = fetch_pinned_repo_names()
        
        repos_list = []
        for repo_name in pinned_names:
            repo_url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}"
            repo_response = requests.get(repo_url, headers=headers, timeout=5)
            if repo_response.status_code == 200:
                repo_data = repo_response.json()
                repos_list.append({
                    "id": repo_data.get("id"),
                    "name": repo_data.get("name"),
                    "description": repo_data.get("description"),
                    "html_url": repo_data.get("html_url"),
                    "language": repo_data.get("language"),
                    "stargazers_count": repo_data.get("stargazers_count"),
                    "forks_count": repo_data.get("forks_count")
                })
            else:
                fallback_found = False
                for fallback_repo in FALLBACK_REPOS:
                    if fallback_repo["name"].lower() == repo_name.lower():
                        repos_list.append(fallback_repo)
                        fallback_found = True
                        break
                if not fallback_found:
                    repos_list.append({
                        "id": repo_name,
                        "name": repo_name,
                        "description": None,
                        "html_url": f"https://github.com/{GITHUB_USERNAME}/{repo_name}",
                        "language": None,
                        "stargazers_count": 0,
                        "forks_count": 0
                    })
        
        cache["data"] = {
            "profile": {
                "name": user_data.get("name") or FALLBACK_PROFILE["name"],
                "avatar_url": user_data.get("avatar_url") or FALLBACK_PROFILE["avatar_url"],
                "bio": user_data.get("bio") or FALLBACK_PROFILE["bio"],
                "followers": user_data.get("followers") or FALLBACK_PROFILE["followers"],
                "following": user_data.get("following") or FALLBACK_PROFILE["following"],
                "company": user_data.get("company") or FALLBACK_PROFILE["company"],
                "location": user_data.get("location") or FALLBACK_PROFILE["location"]
            },
            "repos": repos_list
        }
        cache["timestamp"] = now
        return cache["data"]
        
    except Exception:
        return {
            "profile": FALLBACK_PROFILE,
            "repos": FALLBACK_REPOS
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)