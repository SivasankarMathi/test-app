import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'exploreplus_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (e) {
      console.warn('Failed to update user in localStorage', e)
    }
  }, [user])

  const login = (emailOrPhone, password) => {
    // Quick demo/mock authentication
    const name = emailOrPhone.includes('@')
      ? emailOrPhone.split('@')[0]
      : 'Customer'
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)

    const authenticatedUser = {
      id: 'usr_' + Date.now().toString(36),
      name: formattedName,
      email: emailOrPhone.includes('@') ? emailOrPhone : `${emailOrPhone}@phone.user`,
      phone: !emailOrPhone.includes('@') ? emailOrPhone : '+91 98765 43210',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formattedName)}&backgroundColor=2563eb`,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }

    setUser(authenticatedUser)
    return authenticatedUser
  }

  const signup = ({ name, email, phone, password }) => {
    const newUser = {
      id: 'usr_' + Date.now().toString(36),
      name: name || 'Customer',
      email: email || '',
      phone: phone || '',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || 'Customer')}&backgroundColor=2563eb`,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }

    setUser(newUser)
    return newUser
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
