import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// --- Icon Components (using inline SVG for simplicity) ---
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4V20M4 12H20" />
  </svg>
);

const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);
const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
);
const LifeBuoyIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
  </svg>
);
const LogOutIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);
const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const GroupsIcon = (props) => (
 <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="17" y1="11" x2="23" y2="11" />
  </svg>
);
const TrophyIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
const TrashIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
const SendIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// --- LocalStorage Hook ---
function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}


// --- Initial Data ---
const initialPlayers = [
    { id: 1, name: 'Dhairya', email: 'dhairyaqwerty1@gmail.com', position: 'Striker', status: 'Active', role: 'Admin', teamId: 1 },
];
const initialTeams = [
    { id: 1, name: "GLS Football Club", sport: "Football", messages: [] },
];
const initialPractices = [];
const initialLeagues = [
    { id: Date.now() + 1, name: "Summer League 2024", sport: "Football", startDate: "2025-04-01", isCompleted: false, winner: null, joinRequests: [] },
];
const initialMatches = [];
const initialNotifications = [];
const initialActivityLog = [
    { id: 1, message: 'Welcome to the GLS University Sports Hub!'}
];

// --- App Context Provider ---
const AppContext = createContext(null);
const useAppData = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useStickyState(initialPlayers, 'glsPlayers');
  const [practices, setPractices] = useStickyState(initialPractices, 'glsPractices');
  const [teams, setTeams] = useStickyState(initialTeams, 'glsTeams');
  const [leagues, setLeagues] = useStickyState(initialLeagues, 'glsLeagues');
  const [matches, setMatches] = useStickyState(initialMatches, 'glsMatches');
  const [notifications, setNotifications] = useStickyState(initialNotifications, 'glsNotifications');
  const [activityLog, setActivityLog] = useStickyState(initialActivityLog, 'glsActivityLog');

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('glsUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    }
  }, []);
  
  const addActivity = (message) => {
    setActivityLog(prev => [{ id: Date.now(), message }, ...prev].slice(0, 5));
  };


  
  const signup = (email, name, password) => {
      let player = players.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (player) {
          return { success: false, message: 'An account with this email already exists.' };
      }
      const newPlayer = {
          id: Date.now(), email, name, password, role: 'Player',
          position: 'Unassigned', status: 'Active', teamId: null
      };
      setPlayers(prev => [...prev, newPlayer]);
      const userData = { id: newPlayer.id, email: newPlayer.email, name: newPlayer.name, role: newPlayer.role };
      localStorage.setItem('glsUser', JSON.stringify(userData));
      setUser(userData);
      addActivity(`${newPlayer.name} created an account.`);
      return { success: true };
  };

  const login = (email, password) => {
      const player = players.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (player) {
          // Check password
          if (player.password !== password) {
              return { success: false, message: 'Incorrect password.' };
          }
          const userData = { id: player.id, email: player.email, name: player.name, role: player.role };
          localStorage.setItem('glsUser', JSON.stringify(userData));
          setUser(userData);
          addActivity(`${player.name} logged in.`);
          return { success: true };
      }
      return { success: false, message: 'No account found with this email.' };
  };

  const logout = () => {
    const loggedOutUser = user;
    localStorage.removeItem('glsUser');
    setUser(null);
    if(loggedOutUser) addActivity(`${loggedOutUser.name} logged out.`);
  };

  const addPlayer = (player) => {
      setPlayers(prev => [...prev, { ...player, id: Date.now() }]);
      addActivity(`A new player was added: ${player.name}.`);
  };

  const [darkMode, setDarkMode] = useStickyState(false, 'flyHighDarkMode');
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const deletePlayer = (id) => {
      const player = players.find(p => p.id === id);
      if (player) addActivity(`${player.name} was removed from the roster.`);
      setPlayers(prev => prev.filter(p => p.id !== id));
  };
  const updatePlayerRole = (id, role) => {
      const player = players.find(p => p.id === id);
      if (player) addActivity(`${player.name}'s role was changed to ${role}.`);
      setPlayers(prev => prev.map(p => p.id === id ? { ...p, role } : p));
  };
  const updatePlayerTeam = (playerId, teamId) => {
      const player = players.find(p => p.id === playerId);
      if (player) {
          const teamName = teamId ? teams.find(t => t.id === teamId)?.name : 'Unassigned';
          addActivity(`${player.name} joined the team: ${teamName}.`);
      }
      setPlayers(prev => prev.map(p => p.id === playerId ? { ...p, teamId: teamId } : p));
  };

  const addPractice = (practice) => {
      setPractices(prev => [...prev, { ...practice, id: Date.now() }]);
      addActivity(`A new practice was scheduled: ${practice.topic}.`);
  };
  const deletePractice = (id) => {
      const practice = practices.find(p => p.id === id);
      if(practice) addActivity(`Practice cancelled: ${practice.topic}.`);
      setPractices(prev => prev.filter(e => e.id !== id));
  };
  
  const addTeam = (team) => {
      setTeams(prev => [...prev, { ...team, id: Date.now(), messages: [] }]);
      addActivity(`A new team was created: ${team.name}.`);
  };
  const deleteTeam = (id) => {
      const team = teams.find(t => t.id === id);
      if(team) addActivity(`Team disbanded: ${team.name}.`);
      setTeams(prev => prev.filter(g => g.id !== id));
  };
  
  const addLeague = (league) => {
      setLeagues(prev => [...prev, { ...league, id: Date.now(), joinRequests: [] }]);
      addActivity(`A new league was announced: ${league.name}.`);
  };
  const deleteLeague = (id) => {
      const league = leagues.find(l => l.id === id);
      if(league) addActivity(`League removed: ${league.name}.`);
      setLeagues(prev => prev.filter(l => l.id !== id));
  };

  const addMatch = (match) => {
      setMatches(prev => [...prev, { ...match, id: Date.now(), scoreA: 0, scoreB: 0 }]);
      addActivity(`A new match was scheduled: ${match.teamA} vs ${match.teamB}.`);
  };
  const deleteMatch = (id) => {
      addActivity(`Match cancelled.`);
      setMatches(prev => prev.filter(m => m.id !== id));
  };

  const addMessageToTeam = (teamId, message) => {
      setTeams(prevTeams => prevTeams.map(team => 
          team.id === teamId ? { ...team, messages: [...team.messages, message] } : team
      ));
  };

  const addNotification = (notif) => {
    setNotifications(prev => [{ ...notif, id: Date.now(), time: 'Just now', type: 'info' }, ...prev]);
    addActivity(`New notification sent: ${notif.title}`);
  };

  const updateMatchScore = (matchId, scoreA, scoreB) => {
    setMatches(prev => prev.map(match => match.id === matchId ? { ...match, scoreA: parseInt(scoreA) || 0, scoreB: parseInt(scoreB) || 0 } : match));
    addActivity('Match score updated.');
  };

  const requestLeagueJoin = (leagueId) => {
    const currentUserId = user?.id;
    if (!currentUserId) return;

    setLeagues(prev => prev.map(league => {
      if (league.id === leagueId) {
        const existingRequest = league.joinRequests?.find(req => req.playerId === currentUserId);
        if (!existingRequest) {
          return {
            ...league,
            joinRequests: [...(league.joinRequests || []), {
              playerId: currentUserId,
              playerName: user.name,
              status: 'pending',
              requestedAt: new Date().toISOString()
            }]
          };
        }
      }
      return league;
    }));
    addActivity(`You requested to join a league.`);
  };

  const approveLeagueJoin = (leagueId, playerId) => {
    setLeagues(prev => prev.map(league => {
      if (league.id === leagueId) {
        return {
          ...league,
          joinRequests: league.joinRequests?.map(req =>
            req.playerId === playerId ? { ...req, status: 'approved' } : req
          ) || []
        };
      }
      return league;
    }));
    const player = players.find(p => p.id === playerId);
    if (player) addActivity(`${player.name}'s league join request was approved.`);
  };

  const rejectLeagueJoin = (leagueId, playerId) => {
    setLeagues(prev => prev.map(league => {
      if (league.id === leagueId) {
        return {
          ...league,
          joinRequests: league.joinRequests?.map(req =>
            req.playerId === playerId ? { ...req, status: 'rejected' } : req
          ) || []
        };
      }
      return league;
    }));
    const player = players.find(p => p.id === playerId);
    if (player) addActivity(`${player.name}'s league join request was rejected.`);
  };

  const completeLeague = (leagueId, winnerTeam) => {
    setLeagues(prev => prev.map(league =>
      league.id === leagueId
        ? { ...league, isCompleted: true, winner: winnerTeam }
        : league
    ));
    addActivity(`League completed! Winner: ${winnerTeam}.`);
  };

  const value = {
    user, login, logout, signup,
    players, addPlayer, deletePlayer, updatePlayerRole, updatePlayerTeam,
    practices, addPractice, deletePractice,
    teams, addTeam, deleteTeam, addMessageToTeam,
    leagues, addLeague, deleteLeague, requestLeagueJoin, approveLeagueJoin, rejectLeagueJoin, completeLeague,
    matches, addMatch, deleteMatch, updateMatchScore,
    notifications, addNotification,
    activityLog,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// --- Helper Functions ---
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// --- Components ---
const Login = ({ onNavigate }) => {
  const { login } = useAppData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
    }
    if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }
    const result = login(email, password);
    if (result.success) {
      onNavigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-4">
            <img src="https://glsuniversity.ac.in/images/gls-logo-new.png" alt="GLS University Logo" className="h-16" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">GLS Sports Hub</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password-login" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password" id="password-login" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              placeholder="••••••••" required
            />
          </div>
          <button type="submit" className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Not a student?{' '}
          <button onClick={() => onNavigate('/signup')} className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

const Signup = ({ onNavigate }) => {
  const { signup } = useAppData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        const result = signup(email, name, password);
        if(result.success) {
            onNavigate("/dashboard");
        } else {
            setError(result.message);
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
       <div className="flex flex-col items-center mb-4">
            <img src="https://glsuniversity.ac.in/images/gls-logo-new.png" alt="GLS University Logo" className="h-16" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">Join the Action</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          <div>
            <label htmlFor="name-signup" className="text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name-signup" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" required/>
          </div>
          <div>
            <label htmlFor="email-signup" className="text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email-signup" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" required/>
          </div>
          <div>
            <label htmlFor="password-signup" className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password-signup" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" required/>
          </div>
          <button type="submit" className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Sign Up</button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button onClick={() => onNavigate('/')} className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
    const { practices, leagues, activityLog, user } = useAppData();

    return (
        <div className="animate-fadeInScale safe-bottom">
            {/* Header Section */}
            <div className="mb-8 animate-slideInUp">
                <h1 className="mobile-heading bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent font-black mb-2">
                    Welcome Back!
                </h1>
                <p className="mobile-body text-slate-300 mb-6">
                    Hello <span className="text-cyan-400 font-semibold">{user?.name}</span>, ready to dominate the field? 🏆
                </p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fadeInScale stagger-2">
                <div className="mobile-card text-center">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-cyan-400">{practices.length}</p>
                    <p className="mobile-caption text-slate-400">Upcoming Practices</p>
                </div>
                <div className="mobile-card text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <GroupsIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-orange-400">{leagues.length}</p>
                    <p className="mobile-caption text-slate-400">Active Leagues</p>
                </div>
                <div className="mobile-card text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrophyIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-green-400">{leagues.filter(l => l.isCompleted).length}</p>
                    <p className="mobile-caption text-slate-400">Completed</p>
                </div>
                <div className="mobile-card text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BellIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-purple-400">{activityLog.length}</p>
                    <p className="mobile-caption text-slate-400">Activities</p>
                </div>
            </div>

            {/* Practices Section */}
            <div className="mobile-card mb-6 animate-slideInRight stagger-3">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="mobile-subheading text-cyan-400 font-bold flex items-center">
                        <CalendarIcon className="w-6 h-6 mr-2" />
                        Upcoming Practices
                    </h2>
                    <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded-full border border-cyan-500/20">
                        {practices.length} scheduled
                    </span>
                </div>

                <div className="space-y-3">
                    {practices.length > 0 ? practices.slice(0, 3).map((p, index) => (
                        <div key={p.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-slideInUp bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <p className="font-semibold text-white text-sm">{p.topic}</p>
                                    <p className="text-slate-400 text-xs mt-1">{p.location}</p>
                                </div>
                                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-xs rounded-full border border-cyan-500/30 ml-3">
                                    {new Date(p.date).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-8">
                            <CalendarIcon className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-50" />
                            <p className="text-slate-400 mb-2">No practices scheduled</p>
                            <p className="text-slate-500 text-sm">Check back soon for updates!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Leagues Section */}
            <div className="mobile-card mb-6 animate-slideInLeft stagger-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="mobile-subheading text-orange-400 font-bold flex items-center">
                        <TrophyIcon className="w-6 h-6 mr-2" />
                        Active Leagues
                    </h2>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/20">
                        {leagues.length} leagues
                    </span>
                </div>

                <div className="space-y-3">
                    {leagues.length > 0 ? leagues.slice(0, 2).map((l, index) => (
                        <div key={l.id} style={{animationDelay: `${index * 0.15}s`}} className="animate-fadeInScale bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-white">{l.name}</p>
                                    <p className="text-slate-400 text-xs mt-1">Starts: {new Date(l.startDate).toLocaleDateString()}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                    l.isCompleted ? 'bg-green-600 text-green-100' : 'bg-cyan-600 text-cyan-100'
                                }`}>
                                    {l.isCompleted ? 'Completed' : 'Active'}
                                </span>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-6">
                            <TrophyIcon className="w-10 h-10 text-slate-500 mx-auto mb-2 opacity-50" />
                            <p className="text-slate-400 text-sm">No active leagues yet</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mobile-card animate-bounceIn stagger-5">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="mobile-subheading text-purple-400 font-bold flex items-center">
                        <BellIcon className="w-6 h-6 mr-2" />
                        Recent Activity
                    </h2>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/20">
                        {activityLog.length} updates
                    </span>
                </div>

                <div className="space-y-3">
                    {activityLog.length > 0 ? activityLog.slice(0, 4).map((log, index) => (
                        <div key={log.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fadeInScale bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                                <span className="mobile-body text-slate-300 text-sm">{log.message}</span>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-6">
                            <BellIcon className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-50" />
                            <p className="text-slate-400 text-sm">No recent activity</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

const Players = () => {
    const { user, players, teams, addPlayer, deletePlayer, updatePlayerRole } = useAppData();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const getTeamName = (teamId) => {
        if (!teamId) return 'Unassigned';
        return teams.find(t => t.id === teamId)?.name || 'Unknown Team';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && position) {
            addPlayer({ name, position, status: 'Active', email: `${name.split(' ')[0].toLowerCase()}${Date.now().toString().slice(-4)}@example.com` });
            setName('');
            setPosition('');
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-3">
                <UsersIcon className="w-8 h-8 text-blue-400" />
                <h1 className="text-4xl font-bold text-white">Players</h1>
            </div>

             {user.role === 'Admin' && (
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">Add New Player</h2>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Player Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Position (e.g., Striker)"
                            value={position}
                            onChange={e => setPosition(e.target.value)}
                            className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-3 text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                            Add Player
                        </button>
                    </form>
                </div>
            )}
            <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-700">
                            <tr className="text-left text-slate-300">
                                <th className="px-6 py-4 font-semibold">Name</th>
                                <th className="px-6 py-4 font-semibold">Position</th>
                                <th className="px-6 py-4 font-semibold">Team</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Role</th>
                                {user.role === 'Admin' && <th className="px-6 py-4 font-semibold">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {players.map((player) => (
                                <tr key={player.id} className="hover:bg-slate-750">
                                    <td className="px-6 py-4 text-white">{player.name}</td>
                                    <td className="px-6 py-4 text-slate-300">{player.position}</td>
                                    <td className="px-6 py-4 text-slate-300">{getTeamName(player.teamId)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                            player.status === 'Active'
                                                ? 'bg-green-600 text-green-100'
                                                : 'bg-yellow-600 text-yellow-100'
                                        }`}>
                                            {player.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.role === 'Admin' && player.email.toLowerCase() !== 'dhairyaqwerty1@gmail.com' ? (
                                            <select
                                                value={player.role}
                                                onChange={(e) => updatePlayerRole(player.id, e.target.value)}
                                                className="px-3 py-1 bg-slate-600 border border-slate-500 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                            >
                                                <option value="Player">Player</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        ) : <span className="text-slate-300">{player.role}</span>}
                                    </td>
                                    {user.role === 'Admin' && (
                                        <td className="px-6 py-4">
                                            {player.email.toLowerCase() !== 'dhairyaqwerty1@gmail.com' && (
                                                <button
                                                    onClick={() => deletePlayer(player.id)}
                                                    className="text-red-400 hover:text-red-300 transition-colors"
                                                >
                                                    <TrashIcon className="w-5 h-5" />
                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
const Notifications = () => {
    const { user, notifications, addNotification } = useAppData();
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && message) {
            addNotification({ title, message });
            setTitle('');
            setMessage('');
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-3">
                <BellIcon className="w-8 h-8 text-blue-400" />
                <h1 className="text-4xl font-bold text-white">Notifications</h1>
            </div>

             {user.role === 'Admin' && (
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
                    <h2 className="text-xl font-semibold text-orange-400 mb-4">Send a New Notification</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-slate-300 mb-2">Title</label>
                            <input
                                type="text"
                                id="notif-title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Notification title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Message</label>
                            <textarea
                                id="notif-message"
                                rows="4"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Notification message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send Notification
                        </button>
                    </form>
                </div>
            )}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-orange-400 mb-4">Recent Notifications</h2>
                {notifications.length > 0 ? notifications.map(notif => (
                    <div key={notif.id} className="p-6 bg-slate-800 border-l-4 border-orange-500 rounded-r-xl shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{notif.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{notif.message}</p>
                        <p className="text-sm text-slate-500 mt-3">{notif.time}</p>
                    </div>
                )) : <p className="text-slate-400 text-center py-8">No notifications yet. Stay tuned for updates!</p>}
            </div>
        </div>
    );
};

const Support = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = encodeURIComponent(`*Support Request*\n\n*Subject:* ${subject}\n\n*Message:* ${message}`);
        const whatsappUrl = `https://wa.me/917574004001?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-3">
                <LifeBuoyIcon className="w-8 h-8 text-orange-500" />
                <h1 className="text-4xl font-bold text-white">Support</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        📱 Contact Support
                    </h2>
                    <p className="text-slate-300 mb-4">Need help? Reach out to our support team via WhatsApp for quick assistance.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">Subject</label>
                            <input
                                type="text"
                                id="support-subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Brief subject of your issue"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Message</label>
                            <textarea
                                id="support-message"
                                rows="6"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                                placeholder="Describe your issue in detail"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
                        >
                            📱 Send via WhatsApp
                        </button>
                    </form>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">Help & Resources</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2">Quick Tips</h3>
                            <ul className="text-slate-400 space-y-2 text-sm">
                                <li>• Use the Settings panel (Admin only) to manage all sports data</li>
                                <li>• Join teams to start chatting with teammates</li>
                                <li>• Practice schedules are visible on the Dashboard</li>
                                <li>• All notifications appear in the Notifications tab</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Support Hours</h3>
                            <p className="text-slate-300 text-sm">
                                Our support team is available Monday through Friday, 9 AM to 6 PM IST.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Contact Info</h3>
                            <p className="text-slate-300 text-sm">
                                For urgent issues, use the WhatsApp contact form above.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Position Selection Modal ---
const PositionSelectionModal = ({ team, onConfirm, onClose }) => {
    const [position, setPosition] = useState('');

    const positionExamples = {
        'Football': 'e.g., Striker, Midfielder, Defender, Goalkeeper',
        'Cricket': 'e.g., Batsman, Bowler, Wicket-keeper, All-rounder',
        'Basketball': 'e.g., Point Guard, Center, Forward',
        'generic': 'e.g., Captain, Player'
    };

    const placeholder = positionExamples[team.sport] || positionExamples.generic;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (position.trim()) {
            onConfirm(position.trim());
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-600 max-w-md w-full mx-4 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Join {team.name}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">Enter your preferred position on the team:</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-lg transition-all hover:shadow-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!position.trim()}
                            className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all hover:shadow-lg disabled:hover:shadow-none"
                        >
                            Join Team
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const TeamChat = ({ team, onLeaveTeam }) => {
    const { user, addMessageToTeam, players } = useAppData();
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [team.messages]);

    const teamMembers = players.filter(p => p.teamId === team.id);
    const memberNames = teamMembers.reduce((acc, player) => {
        acc[player.id] = player.name;
        return acc;
    }, {});

    const getAvatarInitials = (senderName) => {
        return senderName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            addMessageToTeam(team.id, {
                sender: user.name,
                senderId: user.id,
                text: newMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                timestamp: Date.now()
            });
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-700 border-b border-slate-600">
                <div>
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <p className="text-sm text-slate-300">{team.sport} • {teamMembers.length} members</p>
                </div>
                <button
                    onClick={onLeaveTeam}
                    className="px-3 py-1 text-sm text-red-400 bg-red-900 bg-opacity-30 border border-red-800 rounded-lg hover:bg-red-900 hover:bg-opacity-50 transition-colors"
                >
                    Leave Team
                </button>
            </div>

            {/* Members List */}
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-600">
                <div className="flex items-center space-x-2 overflow-x-auto">
                    {teamMembers.slice(0, 8).map(member => (
                        <div key={member.id} className="flex flex-col items-center min-w-max">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {getAvatarInitials(member.name)}
                            </div>
                            <span className="text-xs text-slate-400 mt-1">{member.position}</span>
                        </div>
                    ))}
                    {teamMembers.length > 8 && (
                        <div className="flex items-center justify-center w-8 h-8 bg-slate-600 rounded-full text-slate-400 text-xs">
                            +{teamMembers.length - 8}
                        </div>
                    )}
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-900">
                <div className="space-y-4">
                    {team.messages.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-slate-400 mb-2">🏆 Welcome to {team.name}!</p>
                            <p className="text-slate-500 text-sm">Be the first to send a message to your teammates.</p>
                        </div>
                    ) : (
                        team.messages.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0)).map((msg, index) => (
                            <div key={index} className={`flex ${msg.senderId === user.id ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md ${msg.senderId === user.id ? 'order-2' : 'order-1'}`}>
                                    {msg.senderId !== user.id && (
                                        <div className="flex items-center mb-1">
                                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                                                {getAvatarInitials(msg.sender)}
                                            </div>
                                            <span className="text-slate-400 text-sm">{msg.sender}</span>
                                        </div>
                                    )}
                                    <div className={`px-4 py-3 rounded-2xl shadow-lg ${msg.senderId === user.id
                                        ? 'bg-orange-600 text-white rounded-br-md'
                                        : 'bg-slate-700 text-slate-200 border border-slate-600 rounded-bl-md'
                                    }`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <p className={`text-xs mt-1 opacity-70 ${msg.senderId === user.id ? 'text-right' : 'text-left'}`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <div ref={chatEndRef} />
                </div>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-slate-800 border-t border-slate-700">
                <form className="flex items-center space-x-3" onSubmit={handleSendMessage}>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-full transition-colors shadow-lg"
                    >
                        <SendIcon className="w-5 h-5"/>
                    </button>
                </form>
            </div>
        </div>
    );
};

const Teams = () => {
    const { user, players, teams, addTeam, deleteTeam, updatePlayerTeam } = useAppData();
    const [selectedTeamId, setSelectedTeamId] = useState(teams[0]?.id || null);
    const [showChat, setShowChat] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [sport, setSport] = useState('');
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [joiningTeam, setJoiningTeam] = useState(null);

    const handleAddTeam = (e) => {
        e.preventDefault();
        if (teamName && sport) {
            addTeam({ name: teamName, sport });
            setTeamName('');
            setSport('');
        }
    };

    const handleJoinTeamClick = (team) => {
        setJoiningTeam(team);
        setShowPositionModal(true);
    };

    const handleConfirmJoin = (position) => {
        // Update player with preferred position
        const currentPlayer = players.find(p => p.id === user.id);
        if (currentPlayer) {
            // Here you could update a preferred position field on the player
            // For now, we'll just update the team membership
            updatePlayerTeam(user.id, joiningTeam.id);
        }
        setShowPositionModal(false);
        setJoiningTeam(null);
    };

    const selectedTeam = teams.find(t => t.id === selectedTeamId);
    const teamMembers = players.filter(p => p.teamId === selectedTeamId);
    const currentPlayer = players.find(p => p.id === user.id);
    const isMemberOfSelectedTeam = currentPlayer?.teamId === selectedTeamId;

    return (
        <>
            <div className="flex flex-col h-full gap-6 lg:flex-row">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-bold text-white mb-6 flex items-center">
                <GroupsIcon className="w-8 h-8 mr-3 text-blue-400" />
                        Teams
                    </h1>
                    {user.role === 'Admin' && (
                         <div className="p-6 mb-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
                            <h2 className="text-xl font-semibold text-orange-400 mb-4">Create New Team</h2>
                            <form className="space-y-4" onSubmit={handleAddTeam}>
                                <div>
                                    <label className="block text-slate-300 mb-2">Team Name</label>
                                    <input
                                        type="text"
                                        placeholder="Team Name"
                                        value={teamName}
                                        onChange={e => setTeamName(e.target.value)}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-2">Sport</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Football, Cricket, Basketball"
                                        value={sport}
                                        onChange={e => setSport(e.target.value)}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                                >
                                    Create Team
                                </button>
                            </form>
                        </div>
                    )}
                    <div className="space-y-3">
                        {teams.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-slate-400">No teams available yet.</p>
                                {user.role === 'Admin' && <p className="text-slate-500 text-sm mt-2">Create the first team above!</p>}
                            </div>
                        ) : (
                            teams.map(team => (
                                <div
                                    key={team.id}
                                    onClick={() => setSelectedTeamId(team.id)}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${selectedTeamId === team.id
                                        ? 'bg-orange-600 border-orange-500 text-white shadow-lg'
                                        : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-750 hover:border-slate-600'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="font-semibold">{team.name}</p>
                                            <div className="flex items-center mt-1">
                                                <span className="text-sm opacity-90">{team.sport}</span>
                                                <span className="mx-2 text-slate-500">•</span>
                                                <span className="text-sm opacity-90">{players.filter(p => p.teamId === team.id).length} members</span>
                                            </div>
                                        </div>
                                        {user.role === 'Admin' && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); deleteTeam(team.id)}}
                                                className="p-1 text-red-400 hover:text-red-300 transition-colors"
                                            >
                                                <TrashIcon className="w-4 h-4"/>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="flex-1 min-h-[600px] lg:h-auto">
                    {selectedTeam ? (
                        isMemberOfSelectedTeam ? (
                            showChat ? (
                                <TeamChat team={selectedTeam} onLeaveTeam={() => { updatePlayerTeam(user.id, null); setShowChat(false); }} />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full p-8 bg-slate-800 rounded-xl border border-slate-700">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <GroupsIcon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{selectedTeam.name}</h3>
                                        <p className="text-slate-300 mb-6">{selectedTeam.sport} Team • {teamMembers.length} members</p>
                                        <div className="flex gap-4 justify-center">
                                            <button
                                                onClick={() => setShowChat(true)}
                                                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                                            >
                                                Open Team Chat
                                            </button>
                                            <button
                                                onClick={() => updatePlayerTeam(user.id, null)}
                                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                                            >
                                                Leave Team
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                             <div className="flex flex-col items-center justify-center h-full p-8 bg-slate-800 rounded-xl border border-slate-700">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <UsersIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{selectedTeam.name}</h3>
                                    <p className="text-slate-300 mb-2">{selectedTeam.sport} Team</p>
                                    <p className="text-slate-400 text-sm mb-6">Ready to join the team? We'll need your preferred position!</p>
                                    <button
                                        onClick={() => handleJoinTeamClick(selectedTeam)}
                                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        Join Team
                                    </button>
                                </div>
                             </div>
                        )
                    ) :
                    <div className="flex items-center justify-center h-full bg-slate-800 rounded-xl border border-slate-700">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GroupsIcon className="w-8 h-8 text-slate-400" />
                            </div>
                            <p className="text-slate-400">Select a team to view details</p>
                        </div>
                    </div>
                    }
                </div>
            </div>

            {showPositionModal && joiningTeam && (
                <PositionSelectionModal
                    team={joiningTeam}
                    onConfirm={handleConfirmJoin}
                    onClose={() => setShowPositionModal(false)}
                />
            )}
        </>
    );
};

const CrudPage = ({ title, data, onAdd, onDelete, fields, columns, icon }) => { const { user } = useAppData(); const [formState, setFormState] = useState({}); const initialState = useRef({}); useEffect(() => { const state = {}; fields.forEach(field => { state[field.name] = ''; }); initialState.current = state; setFormState(state); }, [fields]); const handleInputChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value })); const handleSubmit = e => { e.preventDefault(); onAdd(formState); setFormState(initialState.current); }; return ( <div className="space-y-8"> <div className="flex items-center space-x-3"> {icon && <icon className="w-8 h-8 text-orange-500" />} <h1 className="text-4xl font-bold text-white">{title}</h1> </div> {user.role === 'Admin' && ( <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg"> <h2 className="text-xl font-semibold text-orange-400 mb-4">Schedule New {title.slice(0, -1)}</h2> <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}> {fields.map(field => ( <div key={field.name}> <label className="block text-slate-300 mb-2">{field.label}</label> <input type={field.type || 'text'} name={field.name} id={field.name} placeholder={field.placeholder} value={formState[field.name] || ''} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500" required /> </div> ))} <button type="submit" className="px-4 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">Add {title.slice(0,-1)}</button> </form> </div> )} <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden"> <div className="overflow-x-auto"> <table className="w-full"> <thead className="bg-slate-700"> <tr className="text-left text-slate-300"> {columns.map(col => <th className="px-6 py-4 font-semibold" key={col.accessor}>{col.header}</th>)} {user.role === 'Admin' && <th className="px-6 py-4 font-semibold">Actions</th>} </tr> </thead> <tbody className="divide-y divide-slate-600"> {data.length === 0 ? ( <tr><td colSpan={columns.length + 1} className="px-6 py-8 text-center text-slate-400">No {title.toLowerCase()} scheduled yet.</td></tr> ) : ( data.map(item => ( <tr key={item.id} className="text-white hover:bg-slate-750"> {columns.map(col => <td className="px-6 py-4" key={col.accessor}>{item[col.accessor]}</td>)} {user.role === 'Admin' && ( <td className="px-6 py-4"> <button onClick={() => onDelete(item.id)} className="text-red-400 hover:text-red-300 transition-colors"> <TrashIcon className="w-5 h-5" /> </button> </td> )} </tr> )) )} </tbody> </table> </div> </div> </div> ); };

const Practice = () => {
    const { practices, addPractice, deletePractice } = useAppData();
    const fields = [
        { name: 'topic', label: 'Topic / Drill', placeholder: 'e.g., Passing Accuracy' },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'location', label: 'Location', placeholder: 'e.g., Main Field' }
    ];
    const columns = [ { header: 'Topic / Drill', accessor: 'topic' }, { header: 'Date', accessor: 'date' }, { header: 'Location', accessor: 'location' } ];
    return <CrudPage title="Practices" data={practices} onAdd={addPractice} onDelete={deletePractice} fields={fields} columns={columns} icon={CalendarIcon} />
};
const Leagues = () => {
    const { user, leagues, addLeague, deleteLeague, requestLeagueJoin, approveLeagueJoin, rejectLeagueJoin, completeLeague,
            teams, matches, addMatch, deleteMatch, updateMatchScore } = useAppData();
    const [selectedLeagueId, setSelectedLeagueId] = useState(leagues[0]?.id || null);
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');
    const [matchDate, setMatchDate] = useState('');
    const [location, setLocation] = useState('');
    const [scoreInputA, setScoreInputA] = useState('');
    const [scoreInputB, setScoreInputB] = useState('');
    const [editingScore, setEditingScore] = useState(null);
    const [winnerTeam, setWinnerTeam] = useState('');

    const selectedLeague = leagues.find(l => l.id === selectedLeagueId);
    const leagueMatches = matches.filter(m => m.leagueId === selectedLeagueId);

    const handleAddLeague = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const league = {
            name: formData.get('name'),
            sport: formData.get('sport'),
            startDate: formData.get('startDate')
        };
        if (league.name && league.sport && league.startDate) {
            addLeague(league);
            form.reset();
        }
    };

    const handleAddMatch = (e) => {
        e.preventDefault();
        if (teamA && teamB && matchDate && selectedLeagueId) {
            addMatch({ leagueId: selectedLeagueId, teamA, teamB, matchDate, location });
            setTeamA('');
            setTeamB('');
            setMatchDate('');
            setLocation('');
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-3">
                <TrophyIcon className="w-8 h-8 text-blue-400" />
                <h1 className="text-4xl font-bold text-white">Leagues</h1>
            </div>

            {user.role === 'Admin' && (
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
                    <h2 className="text-xl font-semibold text-orange-400 mb-4">Create New League</h2>
                    <form className="grid grid-cols-1 gap-4 md:grid-cols-3" onSubmit={handleAddLeague}>
                        <div>
                            <label className="block text-slate-300 mb-2">League Name</label>
                            <input
                                type="text"
                                name="name"
                                id="league-name"
                                placeholder="e.g., Summer Cup"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Sport</label>
                            <input
                                type="text"
                                name="sport"
                                id="league-sport"
                                placeholder="e.g., Soccer"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                id="league-date"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div className="md:col-span-3">
                            <button
                                type="submit"
                                className="px-4 py-3 text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                            >
                                Create League
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="space-y-4">
                {leagues.map(league => {
                    const leagueJoinRequests = league.joinRequests || [];
                    const pendingRequests = leagueJoinRequests.filter(req => req.status === 'pending');
                    const approvedRequests = leagueJoinRequests.filter(req => req.status === 'approved');

                    return (
                        <div key={league.id} className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden">
                            <div
                                className={`flex items-center justify-between p-6 cursor-pointer border-b border-slate-600 transition-colors ${selectedLeagueId === league.id ? 'bg-cyan-600 bg-opacity-10' : ''}`}
                                onClick={() => setSelectedLeagueId(league.id)}
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {league.name}
                                        {league.isCompleted && (
                                            <span className="ml-3 px-2 py-1 text-xs bg-green-600 text-white rounded-full">
                                                COMPLETED
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-slate-400 mt-1">Sport: {league.sport}</p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {league.isCompleted ? (
                                            <>Ended • Winner: <span className="text-cyan-400 font-semibold">{league.winner}</span></>
                                        ) : (
                                            <>Starts: {new Date(league.startDate).toLocaleDateString()}</>
                                        )}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                                        {league.matches?.length || 0} matches
                                    </span>
                                    {!league.isCompleted && user.role !== 'Admin' && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                requestLeagueJoin(league.id);
                                            }}
                                            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all"
                                        >
                                            Join League
                                        </button>
                                    )}
                                    {user.role === 'Admin' && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteLeague(league.id)}}
                                            className="text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            <TrashIcon className="w-5 h-5"/>
                                        </button>
                                    )}
                                </div>
                            </div>

                        {selectedLeagueId === league.id && (
                            <div className="p-6 space-y-6 bg-slate-900">
                                <h4 className="text-lg font-semibold text-orange-400 flex items-center">
                                    <TrophyIcon className="w-5 h-5 mr-2" />
                                    League Matches
                                </h4>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {leagueMatches.map(match => (
                                        <div key={match.id} className="p-4 bg-slate-800 border border-slate-600 rounded-lg hover:bg-slate-750 transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-bold text-white text-lg">
                                                    {match.teamA} vs {match.teamB}
                                                </h5>
                                                {user.role === 'Admin' && (
                                                    <button
                                                        onClick={() => deleteMatch(match.id)}
                                                        className="text-red-400 hover:text-red-300"
                                                    >
                                                        <TrashIcon className="w-4 h-4"/>
                                                    </button>
                                                )}
                                            </div>
                                            <p className="text-slate-400 text-sm">
                                                {new Date(match.matchDate).toLocaleString()}
                                            </p>
                                            {match.location && (
                                                <p className="text-slate-400 text-sm mt-1">
                                                    📍 {match.location}
                                                </p>
                                            )}
                                            <p className="text-slate-500 text-xs mt-2">
                                                Score: {match.scoreA} - {match.scoreB}
                                            </p>
                                        </div>
                                    ))}
                                    {leagueMatches.length === 0 && (
                                        <div className="col-span-full text-center py-8">
                                            <p className="text-slate-400">🏆 No matches scheduled yet.</p>
                                            <p className="text-slate-500 text-sm mt-1">Be the first to schedule a match!</p>
                                        </div>
                                    )}
                                </div>

                                {user.role === 'Admin' && (
                                    <div className="pt-6 border-t border-slate-600">
                                        <h4 className="text-lg font-semibold text-orange-400 mb-4">Schedule New Match</h4>
                                        <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleAddMatch}>
                                            <div>
                                                <label className="block text-slate-300 mb-2">Team A</label>
                                                <select
                                                    id="teamA"
                                                    value={teamA}
                                                    onChange={(e) => setTeamA(e.target.value)}
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                    required
                                                >
                                                    <option value="">Select Team A</option>
                                                    {teams.map(team => <option key={team.id} value={team.name}>{team.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-slate-300 mb-2">Team B</label>
                                                <select
                                                    id="teamB"
                                                    value={teamB}
                                                    onChange={(e) => setTeamB(e.target.value)}
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                    required
                                                >
                                                    <option value="">Select Team B</option>
                                                    {teams.map(team => <option key={team.id} value={team.name}>{team.name}</option>)}
                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-slate-300 mb-2">Match Date & Time</label>
                                                <input
                                                    type="datetime-local"
                                                    id="matchDate"
                                                    value={matchDate}
                                                    onChange={(e) => setMatchDate(e.target.value)}
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-slate-300 mb-2">Location</label>
                                                <input
                                                    type="text"
                                                    id="location"
                                                    placeholder="e.g., Main Field"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                                                >
                                                    Schedule Match
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
})}

                {leagues.length === 0 && (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrophyIcon className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-400">No leagues have been created yet.</p>
                        {user.role === 'Admin' && <p className="text-slate-500 text-sm mt-2">Create the first league above!</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

const Layout = ({ children, currentPage, onNavigate }) => {
    const { user, logout } = useAppData();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLogout = () => {
        logout();
        onNavigate("/");
    };

    // Define navigation items based on user role
    const adminNavItems = [
        { path: "/dashboard", label: "Dashboard", icon: HomeIcon },
        { path: "/players", label: "Players", icon: UsersIcon },
        { path: "/practice", label: "Practice", icon: CalendarIcon },
        { path: "/teams", label: "Teams", icon: GroupsIcon },
        { path: "/leagues", label: "Leagues", icon: TrophyIcon },
        { path: "/notifications", label: "Notifications", icon: BellIcon },
        { path: "/settings", label: "Settings", icon: LifeBuoyIcon, adminOnly: true },
        { path: "/support", label: "Support", icon: LifeBuoyIcon },
    ];

    const playerNavItems = [
        { path: "/dashboard", label: "Dashboard", icon: HomeIcon },
        { path: "/support", label: "Settings", icon: LifeBuoyIcon },
    ];

    const navItems = user?.role === 'Admin' ? adminNavItems : playerNavItems;

    return (
        <div className="flex h-screen bg-slate-950 font-sans">
            {/* Sidebar */}
            <aside className={`w-64 bg-slate-800 text-slate-200 flex flex-col transition-all duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 md:translate-x-0 md:relative md:z-auto shadow-lg`}>
                <div className="flex flex-col items-center justify-center h-24 bg-gradient-to-r from-cyan-400 to-cyan-500 p-2 relative">
                    <img src="https://glsuniversity.ac.in/images/gls-logo-new.png" alt="GLS University Logo" className="h-12 brightness-0 invert" />
                    <h1 className="text-lg font-bold text-white mt-2">Fly High</h1>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
                    {navItems.filter(item => !item.adminOnly || user?.role === 'Admin').map(item => (
                        <a
                            key={item.path} href="#"
                            onClick={(e) => { e.preventDefault(); onNavigate(item.path); setMenuOpen(false); }}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-slate-700 ${ currentPage === item.path ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white' }`}
                        >
                            <item.icon className="w-6 h-6" />
                            <span className="ml-3 font-medium">{item.label}</span>
                        </a>
                    ))}
                </nav>
                {/* Logout button at bottom */}
                <div className="p-4 border-t border-slate-700">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <LogOutIcon className="w-5 h-5 mr-3" />
                        <span>Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMenuOpen(false)} />}

            <div className="flex flex-col flex-1">
                {/* Desktop Header */}
                <header className="hidden md:flex items-center justify-between h-16 px-6 bg-slate-800 border-b border-slate-700 shadow-md">
                    <div className="flex items-center">
                        <span className="mr-4 text-slate-300">Welcome, <span className="font-semibold text-cyan-400 glow-cyan">{user?.name}</span></span>
                        <span className={`px-3 py-1 text-xs font-semibold leading-tight rounded-full ${user?.role === 'Admin' ? 'bg-cyan-600 text-white' : 'bg-slate-600 text-slate-300'}`}>{user?.role}</span>
                    </div>
                </header>

                {/* Mobile Header */}
                <header className="flex md:hidden items-center justify-between h-16 px-6 bg-slate-800 border-b border-slate-700">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-300 hover:text-white transition-colors">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                    <div className="flex items-center">
                        <span className="mr-3 text-slate-300 text-sm">Welcome, <span className="font-semibold text-white">{user?.name}</span></span>
                        <span className={`px-2 py-1 text-xs font-semibold leading-tight rounded-full ${user?.role === 'Admin' ? 'bg-cyan-600 text-white' : 'bg-slate-600 text-slate-300'}`}>{user?.role}</span>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-slate-950">
                    <div className="p-4 md:p-6">
                        {children}
                    </div>
                </main>

                {/* Floating Action Button - Context Aware */}
                {user && currentPage !== '/' && currentPage !== '/signup' && (
                    <div className="fab fixed bottom-20 right-4 z-50">
                        {currentPage === '/dashboard' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => onNavigate('/teams')}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                        {currentPage === '/players' && user.role === 'Admin' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => document.getElementById('player-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                        {currentPage === '/teams' && user.role === 'Admin' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => document.getElementById('team-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                        {currentPage === '/practice' && user.role === 'Admin' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => document.getElementById('practice-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                        {currentPage === '/leagues' && user.role === 'Admin' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => document.getElementById('league-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                        {currentPage === '/notifications' && user.role === 'Admin' && (
                            <button className="w-full h-full flex items-center justify-center" onClick={() => document.getElementById('notif-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                )}

                {/* Mobile Bottom Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-800 border-t border-slate-700 shadow-lg safe-bottom">
                    <div className="flex justify-around py-3">
                        {navItems.slice(0, 6).map(item => (
                            <a key={item.path} href="#" onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
                               className={`flex flex-col items-center text-xs text-slate-400 hover:text-orange-500 transition-colors p-2 ${currentPage === item.path ? 'text-orange-500' : ''}`} >
                                <item.icon className="w-5 h-5 mb-1" />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Settings Component ---
const Settings = () => {
    const { user, players, teams, leagues, matches, practices, addPlayer, deletePlayer, addTeam, deleteTeam,
        addPractice, deletePractice, addLeague, deleteLeague, addMatch, deleteMatch, updatePlayerRole,
        addNotification, notifications } = useAppData();

    // Player Management
    const [newPlayerName, setNewPlayerName] = useState('');
    const [newPlayerPosition, setNewPlayerPosition] = useState('');

    // Team Management
    const [newTeamName, setNewTeamName] = useState('');
    const [newTeamSport, setNewTeamSport] = useState('');

    // Practice Management
    const [practiceData, setPracticeData] = useState({ topic: '', date: '', location: '' });

    // League Management
    const [leagueData, setLeagueData] = useState({ name: '', sport: '', startDate: '' });

    // Match Management
    const [matchData, setMatchData] = useState({ leagueId: '', teamA: '', teamB: '', matchDate: '', location: '' });

    // Notification Management
    const [notifData, setNotifData] = useState({ title: '', message: '' });

    if (user?.role !== 'Admin') {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-slate-200 mb-4">Access Restricted</h1>
                <p className="text-slate-400">Only administrators can access the Settings panel.</p>
            </div>
        );
    }

    const handleAddPlayer = () => {
        if (newPlayerName && newPlayerPosition) {
            addPlayer({
                name: newPlayerName,
                position: newPlayerPosition,
                status: 'Active',
                email: `${newPlayerName.split(' ')[0].toLowerCase()}${Date.now().toString().slice(-4)}@example.com`
            });
            setNewPlayerName('');
            setNewPlayerPosition('');
        }
    };

    const handleAddTeam = () => {
        if (newTeamName && newTeamSport) {
            addTeam({ name: newTeamName, sport: newTeamSport });
            setNewTeamName('');
            setNewTeamSport('');
        }
    };

    const handleAddPractice = () => {
        if (practiceData.topic && practiceData.date && practiceData.location) {
            addPractice(practiceData);
            setPracticeData({ topic: '', date: '', location: '' });
        }
    };

    const handleAddLeague = () => {
        if (leagueData.name && leagueData.sport && leagueData.startDate) {
            addLeague(leagueData);
            setLeagueData({ name: '', sport: '', startDate: '' });
        }
    };

    const handleAddMatch = () => {
        if (matchData.leagueId && matchData.teamA && matchData.teamB && matchData.matchDate) {
            addMatch({
                leagueId: parseInt(matchData.leagueId),
                teamA: matchData.teamA,
                teamB: matchData.teamB,
                matchDate: matchData.matchDate,
                location: matchData.location
            });
            setMatchData({ leagueId: '', teamA: '', teamB: '', matchDate: '', location: '' });
        }
    };

    const handleAddNotification = () => {
        if (notifData.title && notifData.message) {
            addNotification(notifData);
            setNotifData({ title: '', message: '' });
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
                <LifeBuoyIcon className="w-8 h-8 text-orange-500" />
                <h1 className="text-4xl font-bold text-white">Admin Settings</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Player Management */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        <UsersIcon className="w-6 h-6 mr-2" />
                        Player Management
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">New Player Name</label>
                            <input
                                type="text"
                                value={newPlayerName}
                                onChange={e => setNewPlayerName(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter player name"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Position</label>
                            <input
                                type="text"
                                value={newPlayerPosition}
                                onChange={e => setNewPlayerPosition(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Striker"
                            />
                        </div>
                        <button
                            onClick={handleAddPlayer}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Add Player
                        </button>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-3">Existing Players</h3>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {players.map(player => (
                                    <div key={player.id} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                                        <div>
                                            <p className="text-white font-medium">{player.name}</p>
                                            <p className="text-slate-400 text-sm">{player.position}</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <select
                                                value={player.role}
                                                onChange={(e) => updatePlayerRole(player.id, e.target.value)}
                                                className="px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs"
                                            >
                                                <option value="Player">Player</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                            {player.email !== 'dhairyaqwerty1@gmail.com' && (
                                                <button
                                                    onClick={() => deletePlayer(player.id)}
                                                    className="text-red-400 hover:text-red-300"
                                                >
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Management */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        <GroupsIcon className="w-6 h-6 mr-2" />
                        Team Management
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">Team Name</label>
                            <input
                                type="text"
                                value={newTeamName}
                                onChange={e => setNewTeamName(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter team name"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Sport</label>
                            <input
                                type="text"
                                value={newTeamSport}
                                onChange={e => setNewTeamSport(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Football"
                            />
                        </div>
                        <button
                            onClick={handleAddTeam}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Create Team
                        </button>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-3">Existing Teams</h3>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {teams.map(team => (
                                    <div key={team.id} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                                        <div>
                                            <p className="text-white font-medium">{team.name}</p>
                                            <p className="text-slate-400 text-sm">{team.sport}</p>
                                        </div>
                                        <button
                                            onClick={() => deleteTeam(team.id)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Practice Management */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        <CalendarIcon className="w-6 h-6 mr-2" />
                        Practice Management
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">Topic/Drill</label>
                            <input
                                type="text"
                                value={practiceData.topic}
                                onChange={e => setPracticeData({...practiceData, topic: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Passing Accuracy"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Date</label>
                            <input
                                type="date"
                                value={practiceData.date}
                                onChange={e => setPracticeData({...practiceData, date: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Location</label>
                            <input
                                type="text"
                                value={practiceData.location}
                                onChange={e => setPracticeData({...practiceData, location: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Main Field"
                            />
                        </div>
                        <button
                            onClick={handleAddPractice}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Schedule Practice
                        </button>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-3">Scheduled Practices</h3>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {practices.map(practice => (
                                    <div key={practice.id} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                                        <div>
                                            <p className="text-white font-medium">{practice.topic}</p>
                                            <p className="text-slate-400 text-sm">{practice.location}</p>
                                        </div>
                                        <button
                                            onClick={() => deletePractice(practice.id)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* League & Match Management */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        <TrophyIcon className="w-6 h-6 mr-2" />
                        League & Tournament Management
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">League Name</label>
                            <input
                                type="text"
                                value={leagueData.name}
                                onChange={e => setLeagueData({...leagueData, name: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Summer Cup"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-slate-300 mb-2">Sport</label>
                                <input
                                    type="text"
                                    value={leagueData.sport}
                                    onChange={e => setLeagueData({...leagueData, sport: e.target.value})}
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="e.g., Soccer"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">Start Date</label>
                                <input
                                    type="date"
                                    value={leagueData.startDate}
                                    onChange={e => setLeagueData({...leagueData, startDate: e.target.value})}
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleAddLeague}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Create League
                        </button>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-3">Existing Leagues</h3>
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {leagues.map(league => (
                                    <div key={league.id} className="flex justify-between items-center p-2 bg-slate-700 rounded">
                                        <span className="text-white text-sm">{league.name}</span>
                                        <button
                                            onClick={() => deleteLeague(league.id)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <TrashIcon className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Match Scheduling */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">Match Scheduling</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">Select League</label>
                            <select
                                value={matchData.leagueId}
                                onChange={e => setMatchData({...matchData, leagueId: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">Choose League</option>
                                {leagues.map(league => (
                                    <option key={league.id} value={league.id}>{league.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-slate-300 mb-2">Team A</label>
                                <input
                                    type="text"
                                    value={matchData.teamA}
                                    onChange={e => setMatchData({...matchData, teamA: e.target.value})}
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Team A"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">Team B</label>
                                <input
                                    type="text"
                                    value={matchData.teamB}
                                    onChange={e => setMatchData({...matchData, teamB: e.target.value})}
                                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Team B"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Match Date & Time</label>
                            <input
                                type="datetime-local"
                                value={matchData.matchDate}
                                onChange={e => setMatchData({...matchData, matchDate: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Location</label>
                            <input
                                type="text"
                                value={matchData.location}
                                onChange={e => setMatchData({...matchData, location: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Main Field"
                            />
                        </div>
                        <button
                            onClick={handleAddMatch}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Schedule Match
                        </button>
                    </div>
                </div>

                {/* Notification Management */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center">
                        <BellIcon className="w-6 h-6 mr-2" />
                        Notifications
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2">Title</label>
                            <input
                                type="text"
                                value={notifData.title}
                                onChange={e => setNotifData({...notifData, title: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Notification title"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Message</label>
                            <textarea
                                value={notifData.message}
                                onChange={e => setNotifData({...notifData, message: e.target.value})}
                                rows="3"
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Notification message"
                            />
                        </div>
                        <button
                            onClick={handleAddNotification}
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Send Notification
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- App Container & Router Simulation ---
const AppContainer = () => {
    const [currentPage, setCurrentPage] = useState('/');
    const { user } = useAppData();

    useEffect(() => {
        if (user) {
            setCurrentPage('/dashboard');
        } else {
            setCurrentPage('/');
        }
    }, [user]);

    const handleNavigate = (path) => setCurrentPage(path);

    const protectedPages = {
        "/dashboard": <Dashboard />,
        "/players": <Players />,
        "/practice": <Practice />,
        "/teams": <Teams />,
        "/leagues": <Leagues />,
        "/notifications": <Notifications />,
        "/settings": <Settings />,
        "/support": <Support />,
    };

    let content;
    if (!user) {
        content = currentPage === '/signup' ? <Signup onNavigate={handleNavigate} /> : <Login onNavigate={handleNavigate} />;
    } else {
        // Role-based page access control
        if (currentPage === '/players' && user.role !== 'Admin') {
            // Redirect non-admin users away from players page
            setCurrentPage('/dashboard');
            content = <Layout currentPage={'/dashboard'} onNavigate={handleNavigate}>{<Dashboard />}</Layout>;
        } else {
            const PageComponent = protectedPages[currentPage] || <Dashboard />;
            content = <Layout currentPage={currentPage} onNavigate={handleNavigate}>{PageComponent}</Layout>;
        }
    }

    return content;
};

// --- Main App Component ---
function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}

export default App;
