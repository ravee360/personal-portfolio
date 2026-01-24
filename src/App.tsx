import React from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Phone, Trophy, Award, Brain, Database, Zap, FileText, ExternalLink } from 'lucide-react';
import profilePhoto from './assets/profile-photo.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
                <img 
                  src={profilePhoto} 
                  alt="Ravikant Prajapati" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Ravikant Prajapati</h1>
            <p className="text-2xl text-blue-100 mb-4 font-medium">AI/ML Engineer | Data Science Enthusiast</p>
            <p className="text-lg text-blue-200 mb-8">B.Tech Electrical Engineering | IET Lucknow</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a 
                href="mailto:ravikantprajapati232326@gmail.com" 
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
              <a 
                href="tel:+919598721674" 
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91-9598721674
              </a>
              <a 
                href="https://github.com/ravee360" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ravikant-prajapati" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <a 
                href="https://leetcode.com/u/ravi_360/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all cursor-pointer"
              >
                LeetCode
              </a>
              <a 
                href="https://www.codechef.com/users/ravee_360" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all cursor-pointer"
              >
                CodeChef
              </a>
              <a 
                href="https://www.kaggle.com/ravee360" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all cursor-pointer"
              >
                Kaggle
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">About Me</h2>
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I am a passionate AI/ML Engineer and Data Science enthusiast with expertise in building intelligent systems 
              using cutting-edge technologies. Currently pursuing my B.Tech in Electrical Engineering, I specialize in 
              NLP, Computer Vision, and Agentic AI frameworks. I have hands-on experience with LangChain, LangGraph, 
              PyTorch, and various transformer models, and I'm dedicated to creating scalable AI solutions that solve 
              real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">B.Tech in Electrical Engineering</p>
                    <p className="text-gray-600 text-sm">Institute of Engineering and Technology, Lucknow</p>
                    <p className="text-gray-500 text-sm">CGPA: 7.23 (Till 6th Sem) | 2022 – 2026</p>
                  </div>
                  <div className="pt-3 border-t border-blue-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-gray-700 font-medium mb-1">Foundation in Data Science</p>
                        <p className="text-gray-600 text-sm">Indian Institute of Technology, Madras (Online)</p>
                        <p className="text-gray-500 text-sm">CGPA: 6.63 | 2023</p>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1NI-kT9L95fTDwNzSSC_uMHZa11FwdbBn/view?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        title="View Certificate"
                      >
                        <FileText className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800">Core Skills</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">Python</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">SQL</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">MATLAB</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">HTML</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">CSS</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">AI/ML:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">NLP</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">Transformers</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">YOLOv8</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">CNNs</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Frameworks:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">PyTorch</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">LangChain</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">FastAPI</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">LangGraph</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gradient-to-b from-transparent to-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Intern</h3>
                  <p className="text-lg text-indigo-600 font-semibold">FoodNEST(S) Technologies Pvt. Ltd.</p>
                  <p className="text-gray-500">Lucknow | July 2025 – Aug 2025</p>
                </div>
                <Briefcase className="w-8 h-8 text-indigo-600" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Built agentic workflow using LangGraph and LangChain for dynamic task routing</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Deployed real-time FastAPI backend for serving interactions</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Classified queries across Web Search, RAG, and Event Management agents</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Enhanced captions using Granite Vision APIs for vision-language captioning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Research Intern</h3>
                  <p className="text-lg text-purple-600 font-semibold">Under Dr. Parul Yadav</p>
                  <p className="text-gray-500">ASL Gloss to Sign Language Video Generation | Jan 2025 – Jun 2025</p>
                </div>
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Developed speech-to-text pipeline using Whisper AI and fine-tuned T5-Large for gloss conversion</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Handled semantic chunking and reproducible evaluation for dataset preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PINN-based Load Flow Studies Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">PINN-based Load Flow Studies</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Physics-Informed Neural Network (PINN) for voltage magnitude estimation in IEEE-33 bus distribution system. 
                  Combines data-driven learning with power system physics constraints using reactive power balance equations. 
                  Achieves enhanced physical consistency and reliability compared to purely data-driven models.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">Python</span>
                  <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 text-sm rounded-full font-medium">PINN</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/PINN-based-LOAD-FLOW-STUDIES.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Chat with SQL DB Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Chat with SQL Database</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Intelligent chatbot system that enables natural language interaction with SQL databases. 
                  Converts user queries into SQL commands, executes them safely, and returns formatted results. 
                  Features query validation, error handling, and secure database access for seamless data exploration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">SQL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">NLP</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/chat_with_sqldb.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* ConvoRAG Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">ConvoRAG - Conversational RAG Chatbot</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Modular RAG chatbot supporting document upload, semantic search, and contextual LLM responses with 
                  LangChain integration and Streamlit UI for real-time chat interface. Features document management, 
                  chat history, and vector store integration using ChromaDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">LangChain</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">FastAPI</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">Streamlit</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://raviloveschatbot232326.streamlit.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
                  >
                    Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a 
                    href="https://github.com/ravee360/chatbot-with-rag.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Emotion Detection Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Emotion Detection using CNN</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Real-time facial expression classification system into seven categories (Angry, Disgust, Fear, Happy, 
                  Neutral, Sad, Surprise) using FER-2013 dataset. Applied transfer learning with VGG16 and ResNet50 
                  achieving 61%+ accuracy. Integrated with OpenCV for live webcam-based emotion recognition.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">OpenCV</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-medium">TensorFlow</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/Emotion_detection_using_CNN.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cap Detection Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Cap Detection using YOLOv8</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Object detection system trained on 1200+ annotated images (671 with caps, 529 without) achieving 
                  93.75% mAP (IoU) on validation dataset. Model trained for 200 epochs with YOLOv8 architecture. 
                  Deployed for real-time detection via OpenCV pipeline for safety/compliance use cases.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">YOLOv8</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full font-medium">OpenCV</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/Cap-detection.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-b from-transparent to-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Achievements & Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Competitive Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>LeetCode:</strong> 150+ problems solved, Contest Rating: 1651</li>
                <li>• <strong>CodeChef:</strong> 130+ problems solved, Current Rating: 1456, Peak Rating: 1511 (2★)</li>
                <li>• <strong>DSA Practice:</strong> 500+ problems across multiple platforms</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Competitions & Certificates</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start justify-between">
                  <div>
                    <strong>SIH 2024 Finalist:</strong> Team Leader & AI/ML Developer
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1KAxHSw3HRKYHcPIXRxIa0TiqYa0KFRrw/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors ml-2"
                    title="View Certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </li>
                <li className="flex items-start justify-between">
                  <div>
                    <strong>Navonmesh AI Ideathon:</strong> Team Leader, Selected among 250+ teams
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1vKuo8fPFowONHwLc6NVpRISdQCl2VnoE/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors ml-2"
                    title="View Certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </li>
                <li className="flex items-start justify-between">
                  <div>
                    <strong>AI Intern - FoodNEST(S) Technologies:</strong> Certificate of Completion
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1eoo1jkgUhkvDLdzOSvSH-DZVdxKMhW_4/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors ml-2"
                    title="View Certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Get In Touch</h2>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-10 max-w-3xl mx-auto text-white">
            <p className="text-xl text-blue-100 mb-8 text-center leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-6">
              <a 
                href="mailto:ravikantprajapati232326@gmail.com" 
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-4" />
                <span className="text-lg font-medium">ravikantprajapati232326@gmail.com</span>
              </a>
              <a 
                href="tel:+919598721674" 
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-4" />
                <span className="text-lg font-medium">+91-9598721674</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ravikant-prajapati" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-6 h-6 mr-4" />
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white border-opacity-20">
              <p className="text-center text-blue-100 mb-4">Also find me on:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://leetcode.com/u/ravi_360/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  LeetCode
                </a>
                <a 
                  href="https://www.codechef.com/users/ravee_360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  CodeChef
                </a>
                <a 
                  href="https://www.kaggle.com/ravee360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  Kaggle
                </a>
                <a 
                  href="https://github.com/ravee360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;