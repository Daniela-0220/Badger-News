import React, { createContext, useState } from 'react';

const UserPreferencesContext = createContext()

const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({})

  const updatePreference = (tag, value) => {
    setPreferences(prevPreferences => ({
      ...prevPreferences,
      [tag]: value,
    }))
  }

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreference }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export { UserPreferencesContext, UserPreferencesProvider }
