import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';

interface User {
  name: string,
  login: string,
  avatar_url: string
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();
  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);

  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    [],
  ) 

  async function loadData() {
    const response =  await fetch('https://api.github.com/users/ferreira029');
    const data = await response.json();

    setUsers(data);
  }

  inputRef.current?.focus();

  return (
    <form>
      <input ref={inputRef} type="text"/>
    </form>
  )

}

export default App;
