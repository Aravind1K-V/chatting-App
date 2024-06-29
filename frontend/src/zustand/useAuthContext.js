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
      name: 'chat-user', // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      onRehydrateStorage: () => (state) => {
        // optional
        state?.authUser && console.log('Rehydrated state:', state.authUser);
      }
    }
  )
);

export default useAuthStore;
