// import { createContext, useState } from 'react';

// interface AuthContext {
//   setIsLoged: (isLoged: boolean) => void;
//   // other properties or methods
// }

// export const Context = createContext({
//   isLoged: true,
//   setIsLoged: (value: boolean) => {},
// });

// export const AuthContext: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//   const [isLoged, setIsLoged] = useState(true);
//   return (
//     <>
//       <Context.Provider value={{ isLoged, setIsLoged }}>
//         {children}
//       </Context.Provider>
//     </>
//   );
// };
