import React from 'react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Phone, Trophy, Award, Brain, Database, Zap, FileText, ExternalLink, MapPin, Globe, Shield } from 'lucide-react';
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
            <p className="text-2xl text-blue-100 mb-2 font-medium">AI/ML Engineer | LLMs &amp; RAG Systems</p>
            <p className="text-lg text-blue-200 mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 shrink-0" aria-hidden />
              Lucknow, India
            </p>
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
              <a 
                href="https://ravikant-portfolio-swart.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Globe className="w-5 h-5 mr-2" />
                Portfolio
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
              I am an AI/ML engineer focused on LLMs, RAG, and multi-agent systems. I build production-style backends with 
              FastAPI, LangChain, and vector databases, and I care about secure, observable deployments. Currently pursuing 
              my B.Tech in Electrical Engineering at IET Lucknow, with strong coursework in DSA, machine learning, DBMS, and OOP.
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
                    <p className="text-gray-500 text-sm">Nov 2022 – June 2026</p>
                    <p className="text-gray-600 text-sm mt-2">
                      <span className="font-semibold text-gray-700">Relevant coursework:</span> DSA, Machine Learning, DBMS, OOPS
                    </p>
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
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">JavaScript</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-medium">MATLAB</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Frameworks / Libraries:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">PyTorch</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">TensorFlow</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">LangChain</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">Hugging Face</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">Scikit-learn</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Developer tools:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">FastAPI</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">MongoDB</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">Redis</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">Docker</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-medium">Git</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key skills:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-medium">LLMs</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-medium">RAG</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-medium">NLP</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-medium">Computer Vision</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-medium">Multi-Agent Systems</span>
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
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Intern</h3>
                  <p className="text-lg text-cyan-600 font-semibold">Techsnitch</p>
                  <p className="text-gray-500">Noida (Remote) | Feb 2026 – Apr 2026</p>
                </div>
                <Briefcase className="w-8 h-8 text-cyan-600" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>LLM orchestration:</strong> Developed an AI concierge using Python, FastAPI, LangChain, and OpenAI APIs with contextual memory and tool routing</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>RAG pipeline:</strong> Built a RAG workflow with PDF ingestion, semantic chunking, embeddings, and vector retrieval using ChromaDB</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Backend engineering:</strong> Designed a FastAPI backend with REST APIs, Pydantic validation, and modular architecture</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Database &amp; deployment:</strong> Integrated MongoDB persistence and deployment workflows for scalable AI applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Intern</h3>
                  <p className="text-lg text-indigo-600 font-semibold">FoodNEST(S) Technologies Pvt. Ltd.</p>
                  <p className="text-gray-500">Lucknow, India | July 2025 – Aug 2025</p>
                </div>
                <Briefcase className="w-8 h-8 text-indigo-600" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Multi-agent AI systems:</strong> Built a LangGraph-based multi-agent workflow integrating RAG, Web Search, and Event Management agents</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>FastAPI &amp; WhatsApp automation:</strong> Developed FastAPI microservices integrated with the WhatsApp Business API</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>LangChain query pipeline:</strong> Implemented query decomposition and parallel execution using LangChain</span>
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
            {/* GuardRAG */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-slate-800 via-indigo-700 to-violet-600 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">GuardRAG: Secure Enterprise RAG</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Secure enterprise-style RAG chatbot with role-based access control (RBAC) for department-specific documents. 
                  Hybrid retrieval over 1000+ semantic chunks using dense vectors and BM25, JWT auth, conversational memory, 
                  LangSmith observability, and deployment on Hugging Face Spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 text-sm rounded-full font-medium">FastAPI</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">LangChain</span>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full font-medium">ChromaDB</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">Groq API</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">JWT</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/RBAC_based_RAG" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* PINN-based Load Flow Studies */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">PINN-Based Load Flow Studies</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Physics-informed neural network (PINN) framework for load flow analysis in power systems. Custom loss 
                  functions combine neural learning with power system equations; visualizations support interpretability of 
                  propagation and PINN optimization behavior.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">PINNs</span>
                  <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 text-sm rounded-full font-medium">Deep Learning</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/PINN-based-LOAD-FLOW-STUDIES" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
                  >
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Car Price Prediction */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Car Price Prediction System</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Random Forest regression on structured vehicle data with 90%+ prediction accuracy. End-to-end preprocessing, 
                  feature engineering, and modular training/inference workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full font-medium">Python</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full font-medium">Scikit-learn</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full font-medium">Machine Learning</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ravee360/Price-prediction" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors flex items-center"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Extracurricular Activities &amp; Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Competitive Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Peak ratings:{' '}
                  <a href="https://www.codechef.com/users/ravee_360" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">1798 on CodeChef</a>
                  {' '}and{' '}
                  <a href="https://leetcode.com/u/ravi_360/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">1678 on LeetCode</a>
                </li>
                <li>• Solved <strong>500+ DSA problems</strong> across LeetCode, CodeChef, and GeeksforGeeks</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Programs &amp; Certificates</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start justify-between gap-2">
                  <span>
                    Completed <strong>Foundation Level in Data Science and Programming</strong> from <strong>IIT Madras</strong>
                  </span>
                  <a 
                    href="https://drive.google.com/file/d/1NI-kT9L95fTDwNzSSC_uMHZa11FwdbBn/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 shrink-0"
                    title="View certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>
                    Led team to <strong>Smart India Hackathon 2024 National Finals</strong>, selected among <strong>Top 5 teams</strong>
                  </span>
                  <a 
                    href="https://drive.google.com/file/d/1KAxHSw3HRKYHcPIXRxIa0TiqYa0KFRrw/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 shrink-0"
                    title="View certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>
                    Led team to <strong>Navonmesh AI Ideathon Grand Finale</strong>, selected among <strong>250+ teams</strong>
                  </span>
                  <a 
                    href="https://drive.google.com/file/d/1vKuo8fPFowONHwLc6NVpRISdQCl2VnoE/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 shrink-0"
                    title="View certificate"
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
              <a 
                href="https://ravikant-portfolio-swart.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="w-6 h-6 mr-4" />
                <span className="text-lg font-medium">Portfolio Website</span>
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
                  href="https://github.com/ravee360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  GitHub
                </a>
                <a 
                  href="https://ravikant-portfolio-swart.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm hover:bg-opacity-30 transition-all"
                >
                  Portfolio
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