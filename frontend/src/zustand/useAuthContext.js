import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,
      setAuthUser: (user) => set({ authUser: user }),
      clearAuthUser: () => set({ authUser: null })
    }),
    {
      name: 'chat-user', 
      getStorage: () => localStorage, 
      onRehydrateStorage: () => (state) => {
        state?.authUser && console.log('Rehydrated state:', state.authUser);
      }
    }
  )
);

export default useAuthStore;
