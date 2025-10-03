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
const initialLeagues = [];
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


  
  const signup = (email, name, number) => {
      let player = players.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (player) {
          return { success: false, message: 'An account with this email already exists.' };
      }
      const newPlayer = {
          id: Date.now(), email, name, number, role: 'Player',
          position: 'Unassigned', status: 'Active', teamId: null
      };
      setPlayers(prev => [...prev, newPlayer]);
      const userData = { id: newPlayer.id, email: newPlayer.email, name: newPlayer.name, number, role: newPlayer.role };
      localStorage.setItem('glsUser', JSON.stringify(userData));
      setUser(userData);
      addActivity(`${newPlayer.name} created an account.`);
      return { success: true };
  };

  const login = (email, number = '') => {
      const player = players.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (player) {
          // Update number if provided
          if (number && number !== player.number) {
              setPlayers(prev => prev.map(p => p.id === player.id ? { ...p, number } : p));
          }
          const userData = { id: player.id, email: player.email, name: player.name, number: number || player.number, role: player.role };
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
      setLeagues(prev => [...prev, { ...league, id: Date.now() }]);
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

  const value = {
    user, login, logout, signup,
    players, addPlayer, deletePlayer, updatePlayerRole, updatePlayerTeam,
    practices, addPractice, deletePractice,
    teams, addTeam, deleteTeam, addMessageToTeam,
    leagues, addLeague, deleteLeague,
    matches, addMatch, deleteMatch,
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
    const result = login(email);
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
    const result = signup(email, name);
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
    const { practices, leagues, activityLog } = useAppData();
    return(
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome to the GLS University Sports Hub!</p>
            <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
                <div className="p-6 bg-white rounded-lg shadow-md lg:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-700">Upcoming Practice</h2>
                    <div className="mt-4 space-y-4">
                        {practices.length > 0 ? practices.map(p => (
                             <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-800">{p.topic}</p>
                                    <p className="text-sm text-gray-500">{p.location}</p>
                                </div>
                                <p className="text-sm font-medium text-indigo-600">{new Date(p.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                            </div>
                        )) : <p className="text-gray-500">No practices scheduled. Create one on the Practice page!</p>}
                    </div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                     <h2 className="text-xl font-semibold text-gray-700">Leagues</h2>
                      <div className="mt-4 space-y-4">
                        {leagues.length > 0 ? leagues.map(l => (
                             <div key={l.id} className="p-4 bg-gray-50 rounded-lg">
                                <p className="font-semibold text-gray-800">{l.name}</p>
                                <p className="text-sm text-gray-500">Sport: {l.sport}</p>
                                <p className="mt-2 text-xs text-gray-500">Starts: {new Date(l.startDate).toLocaleDateString()}</p>
                            </div>
                        )) : <p className="text-gray-500">No active leagues. Create one on the Leagues page!</p>}
                    </div>
                </div>
            </div>
             <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
                <ul className="mt-4 space-y-3 text-gray-600">
                    {activityLog.length > 0 ? activityLog.map(log => (
                        <li key={log.id} className="p-3 transition-colors bg-gray-50 hover:bg-gray-100 rounded-md">{log.message}</li>
                    )) : <p className="text-gray-500">No recent activity.</p>}
                </ul>
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
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Players</h1>
             {user.role === 'Admin' && (
                <div className="p-6 my-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Add New Player</h2>
                    <form className="flex flex-col gap-4 mt-4 md:flex-row" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Player Name" value={name} onChange={e => setName(e.target.value)} className="flex-grow px-3 py-2 border border-gray-300 rounded-md" required />
                        <input type="text" placeholder="Position (e.g., Striker)" value={position} onChange={e => setPosition(e.target.value)} className="flex-grow px-3 py-2 border border-gray-300 rounded-md" required />
                        <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Add Player</button>
                    </form>
                </div>
            )}
            <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-sm font-medium tracking-wider text-left text-gray-600 uppercase border-b border-gray-200">
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Position</th>
                             <th className="px-6 py-4">Team</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Role</th>
                            {user.role === 'Admin' && <th className="px-6 py-4">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {players.map((player) => (
                            <tr key={player.id} className="text-gray-700">
                                <td className="px-6 py-4">{player.name}</td>
                                <td className="px-6 py-4">{player.position}</td>
                                <td className="px-6 py-4">{getTeamName(player.teamId)}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold leading-tight ${player.status === 'Active' ? 'text-green-700 bg-green-100' : 'text-yellow-700 bg-yellow-100'} rounded-full`}>
                                        {player.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                   {user.role === 'Admin' && player.email.toLowerCase() !== 'dhairyaqwerty1@gmail.com' ? (
                                        <select 
                                            value={player.role} 
                                            onChange={(e) => updatePlayerRole(player.id, e.target.value)}
                                            className="px-2 py-1 border border-gray-300 rounded-md bg-gray-50"
                                        >
                                            <option value="Player">Player</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    ) : player.role}
                                </td>
                                {user.role === 'Admin' && (
                                    <td className="px-6 py-4">
                                        {player.email.toLowerCase() !== 'dhairyaqwerty1@gmail.com' && (
                                            <button onClick={() => deletePlayer(player.id)} className="text-red-500 hover:text-red-700">
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
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
             {user.role === 'Admin' && (
                <div className="p-6 my-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Send a New Notification</h2>
                    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="notif-title" className="text-sm font-medium text-gray-700">Title</label>
                            <input type="text" id="notif-title" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="notif-message" className="text-sm font-medium text-gray-700">Message</label>
                            <textarea id="notif-message" rows="3" value={message} onChange={e => setMessage(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md" required></textarea>
                        </div>
                        <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Send Notification</button>
                    </form>
                </div>
            )}
            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">Recent Notifications</h2>
                {notifications.length > 0 ? notifications.map(notif => (
                    <div key={notif.id} className="p-4 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-md">
                        <p><span className="font-bold">{notif.title}:</span> {notif.message}</p>
                        <p className="text-sm text-gray-500">{notif.time}</p>
                    </div>
                )) : <p className="mt-4 text-gray-500">No notifications yet.</p>}
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
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Support</h1>
            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">Contact Us via WhatsApp</h2>
                <p className="mt-2 text-gray-600">Fill out the form below to send a message to our support number on WhatsApp.</p>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="support-subject" className="text-sm font-medium text-gray-700">Subject</label>
                        <input type="text" id="support-subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label htmlFor="support-message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea id="support-message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" required></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">Send via WhatsApp</button>
                </form>
            </div>
        </div>
    );
};


const TeamChat = ({ team, onLeaveTeam }) => {
    const { user, addMessageToTeam } = useAppData();
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [team.messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            addMessageToTeam(team.id, { sender: user.name, text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
                    <p className="text-sm text-gray-500">{team.sport}</p>
                </div>
                <button onClick={onLeaveTeam} className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-md hover:bg-red-200">Leave Team</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                    {team.messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === user.name ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === user.name ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <p className="text-sm font-semibold">{msg.sender}</p>
                                <p>{msg.text}</p>
                                <p className="text-xs text-right opacity-75">{msg.time}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
            </div>
            <div className="p-4 border-t">
                <form className="flex items-center" onSubmit={handleSendMessage}>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <button type="submit" className="p-2 ml-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700">
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

    const handleAddTeam = (e) => {
        e.preventDefault();
        if (teamName && sport) {
            addTeam({ name: teamName, sport });
            setTeamName('');
            setSport('');
        }
    };
    
    const selectedTeam = teams.find(t => t.id === selectedTeamId);
    const teamMembers = players.filter(p => p.teamId === selectedTeamId);
    const currentPlayer = players.find(p => p.id === user.id);
    const isMemberOfSelectedTeam = currentPlayer?.teamId === selectedTeamId;

    return (
        <div className="flex flex-col h-full gap-6 lg:flex-row">
            <div className="lg:w-1/3">
                <h1 className="text-3xl font-bold text-gray-800">Teams</h1>
                {user.role === 'Admin' && (
                     <div className="p-4 my-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700">Create New Team</h2>
                        <form className="mt-4 space-y-3" onSubmit={handleAddTeam}>
                            <input type="text" placeholder="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
                            <input type="text" placeholder="Sport (e.g., Soccer)" value={sport} onChange={e => setSport(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
                            <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create Team</button>
                        </form>
                    </div>
                )}
                <div className="mt-4 space-y-2">
                    {teams.map(team => (
                        <div key={team.id} onClick={() => setSelectedTeamId(team.id)} 
                             className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${selectedTeamId === team.id ? 'bg-indigo-100' : 'bg-white hover:bg-gray-50'}`}>
                            <div>
                                <p className="font-semibold text-gray-800">{team.name}</p>
                                <p className="text-sm text-gray-500">{team.sport}</p>
                            </div>
                            {user.role === 'Admin' && <button onClick={(e) => { e.stopPropagation(); deleteTeam(team.id)}} className="p-1 text-red-400 hover:text-red-600"><TrashIcon className="w-4 h-4"/></button>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 min-h-[600px] lg:h-auto">
                {selectedTeam ? (
                    isMemberOfSelectedTeam ? (
                        showChat ? (
                            <TeamChat team={selectedTeam} onLeaveTeam={() => updatePlayerTeam(user.id, null)} />
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-800">{selectedTeam.name}</h3>
                                <p className="mt-2 text-gray-600">Members: {teamMembers.length}</p>
                                <button onClick={() => setShowChat(true)} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">Open Chat</button>
                                <button onClick={() => updatePlayerTeam(user.id, null)} className="px-6 py-2 mt-4 text-red-600 border border-red-600 rounded-md hover:bg-red-50">Leave Team</button>
                            </div>
                        )
                    ) : (
                         <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800">{selectedTeam.name}</h3>
                            <p className="mt-2 text-gray-600">Members: {teamMembers.length}</p>
                            <button onClick={() => updatePlayerTeam(user.id, selectedTeam.id)} className="px-6 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700">Join Team</button>
                         </div>
                    )
                ) :
                <div className="flex items-center justify-center h-full bg-white rounded-lg shadow-md">
                    <p className="text-gray-500">Select a team to view or create a new one.</p>
                </div>
                }
            </div>
        </div>
    );
};

const CrudPage = ({ title, data, onAdd, onDelete, fields, columns }) => { const { user } = useAppData(); const [formState, setFormState] = useState({}); const initialState = useRef({}); useEffect(() => { const state = {}; fields.forEach(field => { state[field.name] = ''; }); initialState.current = state; setFormState(state); }, [fields]); const handleInputChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value })); const handleSubmit = e => { e.preventDefault(); onAdd(formState); setFormState(initialState.current); }; return ( <div> <h1 className="text-3xl font-bold text-gray-800">{title}</h1> {user.role === 'Admin' && ( <div className="p-6 my-6 bg-white rounded-lg shadow-md"> <h2 className="text-xl font-semibold text-gray-700">Schedule New {title.slice(0, -1)}</h2> <form className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2" onSubmit={handleSubmit}> {fields.map(field => ( <div key={field.name}> <label htmlFor={field.name} className="text-sm font-medium text-gray-700">{field.label}</label> <input type={field.type || 'text'} name={field.name} id={field.name} placeholder={field.placeholder} value={formState[field.name] || ''} onChange={handleInputChange} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required /> </div> ))} <div className="md:col-span-2"> <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Add {title.slice(0,-1)}</button> </div> </form> </div> )} <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-md"> <table className="w-full whitespace-nowrap"> <thead> <tr className="text-sm font-medium tracking-wider text-left text-gray-600 uppercase border-b border-gray-200"> {columns.map(col => <th className="px-6 py-4" key={col.accessor}>{col.header}</th>)} {user.role === 'Admin' && <th className="px-6 py-4">Actions</th>} </tr> </thead> <tbody className="divide-y divide-gray-200"> {data.length === 0 ? ( <tr><td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">No {title.toLowerCase()} scheduled yet.</td></tr> ) : ( data.map(item => ( <tr key={item.id} className="text-gray-700"> {columns.map(col => <td className="px-6 py-4" key={col.accessor}>{item[col.accessor]}</td>)} {user.role === 'Admin' && ( <td className="px-6 py-4"> <button onClick={() => onDelete(item.id)} className="text-red-500 hover:text-red-700"> <TrashIcon className="w-5 h-5" /> </button> </td> )} </tr> )) )} </tbody> </table> </div> </div> ); };

const Practice = () => {
    const { practices, addPractice, deletePractice } = useAppData();
    const fields = [
        { name: 'topic', label: 'Topic / Drill', placeholder: 'e.g., Passing Accuracy' },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'location', label: 'Location', placeholder: 'e.g., Main Field' }
    ];
    const columns = [ { header: 'Topic / Drill', accessor: 'topic' }, { header: 'Date', accessor: 'date' }, { header: 'Location', accessor: 'location' } ];
    return <CrudPage title="Practices" data={practices} onAdd={addPractice} onDelete={deletePractice} fields={fields} columns={columns} />
};
const Leagues = () => {
    const { user, leagues, addLeague, deleteLeague, teams, matches, addMatch, deleteMatch } = useAppData();
    const [selectedLeagueId, setSelectedLeagueId] = useState(leagues[0]?.id || null);
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');
    const [matchDate, setMatchDate] = useState('');
    const [location, setLocation] = useState('');

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
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Leagues</h1>
            {user.role === 'Admin' && (
                <div className="p-6 my-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Create New League</h2>
                    <form className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2" onSubmit={handleAddLeague}>
                        <div>
                            <label htmlFor="league-name" className="text-sm font-medium text-gray-700">League Name</label>
                            <input type="text" name="name" id="league-name" placeholder="e.g., Summer Cup" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="league-sport" className="text-sm font-medium text-gray-700">Sport</label>
                            <input type="text" name="sport" id="league-sport" placeholder="e.g., Soccer" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="league-date" className="text-sm font-medium text-gray-700">Start Date</label>
                            <input type="date" name="startDate" id="league-date" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create League</button>
                        </div>
                    </form>
                </div>
            )}
            <div className="mt-6 space-y-4">
                {leagues.map(league => (
                    <div key={league.id} className="bg-white rounded-lg shadow-md">
                        <div 
                            className={`flex items-center justify-between p-4 cursor-pointer border-b ${selectedLeagueId === league.id ? 'bg-indigo-50' : ''}`}
                            onClick={() => setSelectedLeagueId(league.id)}
                        >
                            <div>
                                <p className="font-semibold text-gray-800">{league.name}</p>
                                <p className="text-sm text-gray-500">Sport: {league.sport}</p>
                                <p className="mt-2 text-xs text-gray-500">Starts: {new Date(league.startDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {user.role === 'Admin' && <button onClick={(e) => { e.stopPropagation(); deleteLeague(league.id)}} className="px-2 py-1 text-red-500 hover:text-red-700"><TrashIcon className="w-4 h-4"/></button>}
                                <span className="text-sm text-gray-500">{leagueMatches.length} matches</span>
                            </div>
                        </div>
                        {selectedLeagueId === league.id && (
                            <div className="p-4 space-y-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {leagueMatches.map(match => (
                                        <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="font-semibold text-gray-800">{match.teamA} vs {match.teamB}</p>
                                                <p className="text-sm text-gray-500">{new Date(match.matchDate).toLocaleDateString()}</p>
                                                {match.location && <p className="text-sm text-gray-500">{match.location}</p>}
                                                <p className="text-xs text-gray-500">Score: {match.scoreA} - {match.scoreB}</p>
                                            </div>
                                            {user.role === 'Admin' && <button onClick={() => deleteMatch(match.id)} className="text-red-500 hover:text-red-700"><TrashIcon className="w-4 h-4"/></button>}
                                        </div>
                                    ))}
                                    {leagueMatches.length === 0 && <p className="text-gray-500">No matches scheduled for this league.</p>}
                                </div>
                                {user.role === 'Admin' && (
                                    <div className="pt-4 border-t">
                                        <h3 className="text-lg font-semibold text-gray-700">Schedule New Match</h3>
                                        <form className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2" onSubmit={handleAddMatch}>
                                            <div>
                                                <label htmlFor="teamA" className="text-sm font-medium text-gray-700">Team A</label>
                                                <select id="teamA" value={teamA} onChange={(e) => setTeamA(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required>
                                                    <option value="">Select Team A</option>
                                                    {teams.map(team => <option key={team.id} value={team.name}>{team.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="teamB" className="text-sm font-medium text-gray-700">Team B</label>
                                                <select id="teamB" value={teamB} onChange={(e) => setTeamB(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required>
                                                    <option value="">Select Team B</option>
                                                    {teams.map(team => <option key={team.id} value={team.name}>{team.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="matchDate" className="text-sm font-medium text-gray-700">Match Date</label>
                                                <input type="datetime-local" id="matchDate" value={matchDate} onChange={(e) => setMatchDate(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" required />
                                            </div>
                                            <div>
                                                <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                                                <input type="text" id="location" placeholder="e.g., Main Field" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Schedule Match</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                {leagues.length === 0 && <p className="text-gray-500">No leagues have been created yet.</p>}
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

    const navItems = [
        { path: null, label: "Menu", icon: MenuIcon, action: 'menu' },
        { path: "/dashboard", label: "Dashboard", icon: HomeIcon },
        { path: "/players", label: "Players", icon: UsersIcon },
        { path: "/practice", label: "Practice", icon: CalendarIcon },
        { path: "/teams", label: "Teams", icon: GroupsIcon },
        { path: "/leagues", label: "Leagues", icon: TrophyIcon },
        { path: "/notifications", label: "Notifications", icon: BellIcon },
        { path: "/support", label: "Support", icon: LifeBuoyIcon },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)} />
                    <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col">
                <div className="flex flex-col items-center justify-center h-24 bg-white p-2">
                     <img src="https://glsuniversity.ac.in/images/gls-logo-new.png" alt="GLS University Logo" className="h-12" />
                     <h1 className="text-lg font-bold text-gray-800 mt-2">Sports Hub</h1>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    {navItems.map(item => (
                        <a
                            key={item.path} href="#"
                            onClick={(e) => { e.preventDefault(); onNavigate(item.path); setMenuOpen(false); }}
                            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${ currentPage === item.path ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white' }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="ml-3">{item.label}</span>
                        </a>
                    ))}
                </nav>
            </aside>
                </div>
            )}
            <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                    <div className="hidden md:block" />
                    <div className="flex items-center">
                        <span className="mr-3 text-gray-700">Welcome, <span className="font-semibold">{user?.name}</span></span>
                        <span className={`px-2 py-1 text-xs font-semibold leading-tight ${user?.role === 'Admin' ? 'text-indigo-700 bg-indigo-100' : 'text-gray-700 bg-gray-100'} rounded-full`}>{user?.role}</span>
                        <button onClick={handleLogout} className="flex items-center ml-4 text-gray-500 hover:text-indigo-600" title="Log Out">
                            <LogOutIcon className="w-6 h-6" />
                        </button>
                    </div>
                </header>
                <main className="flex-1 p-6 pb-20 overflow-y-auto">
                    {children}
                </main>
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-300 shadow-lg">
                    <div className="flex justify-around py-3">
                        {navItems.map(item => (
                            <a key={item.path || item.label} href="#" onClick={(e) => { e.preventDefault(); if (item.action === 'menu') setMenuOpen(!menuOpen); else onNavigate(item.path); }} className={`flex flex-col items-center text-xs text-gray-600 hover:text-indigo-600 transition-colors p-2 ${currentPage === item.path ? 'text-indigo-600' : ''}`} >
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
        "/support": <Support />,
    };

    let content;
    if (!user) {
        content = currentPage === '/signup' ? <Signup onNavigate={handleNavigate} /> : <Login onNavigate={handleNavigate} />;
    } else {
        const PageComponent = protectedPages[currentPage] || <Dashboard />;
        content = <Layout currentPage={currentPage} onNavigate={handleNavigate}>{PageComponent}</Layout>;
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
