import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check credentials
    if (email === 'admin' && password === '1234admin') {
      navigate('/dashboard');
    } else if (email === 'editor' && password === '1234editor') {
      navigate('/dashboard/editor');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      {/* Animated Stars Effect */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md mx-4">
        <div className="bg-background/80 rounded-2xl border border-primary/20 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Enhanced Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-20"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-10 blur-xl"></div>
          
          {/* Content */}
          <div className="relative">
            {/* Logo Container */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-64 relative mb-4">
                {/* Logo Background Effects */}
                <div className="absolute -inset-4 bg-primary/5 blur-2xl animate-pulse-slow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-lg"></div>
                
                {/* Logo Wrapper */}
                <div className="relative bg-background/90 p-4 rounded-lg border border-primary/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer rounded-lg"></div>
                  
                  {/* Logo Image */}
                  <img 
                    src="https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/logo1.jpg"
                    alt="Logo"
                    className="w-full relative z-10 rounded-lg transform hover:scale-105 transition-transform duration-300"
                  />

                  {/* Interactive Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative w-full bg-background/90 border border-primary/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="relative w-full bg-background/90 border border-primary/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>

              {error && (
                <div className="text-secondary text-sm text-center animate-fade-in">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-background hover:bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-primary font-medium transition-all duration-300 relative group overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative text-neon">Iniciar Sesión</span>
              </button>
            </form>

            {/* Enhanced Credentials Helper */}
            <div className="mt-4 text-center space-y-2">
              <p className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300">
                Administrador: <span className="text-primary">admin</span> | 
                Contraseña: <span className="text-primary">1234admin</span>
              </p>
              <p className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300">
                Editor: <span className="text-primary">editor</span> | 
                Contraseña: <span className="text-primary">1234editor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}