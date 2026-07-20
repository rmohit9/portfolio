import faviconImg from '../assets/favicon.png';
import opencvImg from '../assets/opencv.png';
import htmlImg from '../assets/html.png';
import reactImg from '../assets/react.svg';
import tailwindImg from '../assets/tailwind.png';
import pythonImg from '../assets/python.png';
import fastapiImg from '../assets/fastapi.png';
import djangoImg from '../assets/django.png';
import dockerImg from '../assets/docker.png';
import kubernetesImg from '../assets/kubernetes.png';

export const AI_TRACKS_DATA = [
  {
    radius: 46, speed: 25, reverse: false,
    nodes: [
      { name: "OpenAI", src: faviconImg, angle: 0 },
      { name: "Claude", src: faviconImg, angle: 180 }
    ]
  },
  {
    radius: 82, speed: 38, reverse: true,
    nodes: [
      { name: "HuggingFace", src: faviconImg, angle: 0 },
      { name: "Gemini", src: faviconImg, angle: 120 },
      { name: "Ollama", src: faviconImg, angle: 240 }
    ]
  },
  {
    radius: 120, speed: 52, reverse: false,
    nodes: [
      { name: "PyTorch", src: faviconImg, angle: 0 },
      { name: "TensorFlow", src: faviconImg, angle: 90 },
      { name: "OpenCV", src: opencvImg, angle: 180 },
      { name: "LangChain", src: faviconImg, angle: 270 }
    ]
  }
];

export const TECH_TRACKS_DATA = [
  {
    radius: 46, speed: 25, reverse: true,
    nodes: [
      { name: "JavaScript", src: htmlImg, angle: 0 },
      { name: "TypeScript", src: htmlImg, angle: 180 }
    ]
  },
  {
    radius: 82, speed: 38, reverse: false,
    nodes: [
      { name: "React", src: reactImg, angle: 0 },
      { name: "Next.js", src: htmlImg, angle: 120 },
      { name: "Tailwind CSS", src: tailwindImg, angle: 240 }
    ]
  },
  {
    radius: 120, speed: 52, reverse: true,
    nodes: [
      { name: "Python", src: pythonImg, angle: 0 },
      { name: "FastAPI", src: fastapiImg, angle: 72 },
      { name: "Django", src: djangoImg, angle: 144 },
      { name: "Docker", src: dockerImg, angle: 216 },
      { name: "Kubernetes", src: kubernetesImg, angle: 288 }
    ]
  }
];
