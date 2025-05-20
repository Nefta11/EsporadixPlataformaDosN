import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === 'admin' && password === '1234admin') {
        navigate('/dashboard');
      } else if (email === 'editor' && password === '1234editor') {
        navigate('/dashboard/editor');
      } else {
        setError('Credenciales inválidas');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0B14] relative overflow-hidden">
      {/* Enhanced animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles with continuous movement */}
        <div
          className="absolute w-[800px] h-[800px] bg-[#1A1F4D]/30 rounded-full -top-1/2 -left-1/4 blur-3xl animate-float animate-move-x-slow"
        ></div>
        <div
          className="absolute w-[600px] h-[600px] bg-[#242957]/30 rounded-full -bottom-1/4 -right-1/4 blur-2xl animate-float animate-move-y-fast"
        ></div>

        {/* Medium floating shapes */}
        <div
          className="absolute w-[500px] h-[500px] bg-[#2E346C]/30 rounded-full top-1/4 left-1/4 blur-xl animate-float animate-move-x-fast"
        ></div>
        <div
          className="absolute w-[450px] h-[450px] bg-[#383E81]/30 rounded-full bottom-1/3 right-1/3 blur-xl animate-float animate-move-y-slow"
        ></div>

        {/* Small accent shapes */}
        <div
          className="absolute w-[300px] h-[300px] bg-[#424896]/30 rounded-full top-1/3 right-1/4 blur-lg animate-float animate-move-x"
        ></div>
        <div
          className="absolute w-[250px] h-[250px] bg-[#4C52AB]/30 rounded-full bottom-1/4 left-1/3 blur-lg animate-float animate-move-y"
        ></div>
      </div>

      <div className="max-w-md w-full mx-4 relative">
        {/* Card with matching transparency from image */}
        <div className="bg-[#2A2E43]/60 backdrop-blur-md rounded-[10px] p-8 shadow-xl">
          <div className="text-center mb-8">
            {/* Larger logo with subtle animation */}
            <div className="w-48 mx-auto mb-6 relative transition-all duration-500 hover:scale-105">
              <img
                src="https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/logo1.jpg"
                alt="Logo"
                className="w-full rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-light text-white mb-2">Bienvenido de nuevo</h2>
            <p className="text-gray-400">Inicia sesión para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-400" htmlFor="email">
                Usuario
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#2A2E43]/40 border border-gray-600/30 text-white rounded-lg px-10 py-3 
                    focus:outline-none focus:border-gray-500/50
                    transition-all duration-300 ease-in-out placeholder-gray-500
                    hover:border-gray-500/50"
                  placeholder="Ingresa tu usuario"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-400" htmlFor="password">
                Contraseña
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#2A2E43]/40 border border-gray-600/30 text-white rounded-lg px-10 py-3
                    focus:outline-none focus:border-gray-500/50
                    transition-all duration-300 ease-in-out placeholder-gray-500
                    hover:border-gray-500/50"
                  placeholder="Ingresa tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-rose-300 text-sm text-center animate-fade-in">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 group cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600/30 bg-[#2A2E43]/40 text-gray-600
                    focus:ring-0 focus:ring-offset-0 
                    transition-colors group-hover:border-gray-500/50"
                />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Recordarme</span>
              </label>
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2A2E43]/80 hover:bg-[#2A2E43] text-white rounded-lg py-3 font-medium
                transition-all duration-300 ease-in-out
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-600/30 border-t-white rounded-full animate-spin"></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                'Iniciar sesión'
              )}
            </button>

            <div className="mt-4 text-center space-y-2">
              <p className="text-xs text-gray-400">
                Administrador: <span className="text-white">admin</span> |
                Contraseña: <span className="text-white">1234admin</span>
              </p>
              <p className="text-xs text-gray-400">
                Editor: <span className="text-white">editor</span> |
                Contraseña: <span className="text-white">1234editor</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}