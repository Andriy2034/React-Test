
import css from './App.module.css'
import UserCard  from '../UserCard/UserCard'


const users = [
  {
    id: 1,
    name: "Petro",
    age: 29,
    city: "Lviv",
    isOnline: true,
  },
  {
    id: 2,
    name: "Valyl",
    age: 21,
    city: "Kuiv",
    isOnline: false,
  },
  {
    id: 3,
    name: "Andriy",
    age: 26,
    city: "Kolomya",
    isOnline: true,
  },
  {
    id: 4,
    name: "Danya",
    age: 30,
    city: "Dnipro",
    isOnline: false,
  },
  {
    id: 1,
    name: "Petro",
    age: 29,
    city: "Lviv",
    isOnline: true,
  },
  {
    id: 2,
    name: "Valyl",
    age: 21,
    city: "Kuiv",
    isOnline: false,
  },
  {
    id: 3,
    name: "Andriy",
    age: 26,
    city: "Kolomya",
    isOnline: true,
  },
  {
    id: 4,
    name: "Danya",
    age: 30,
    city: "Dnipro",
    isOnline: false,
  },
  {
    id: 1,
    name: "Petro",
    age: 29,
    city: "Lviv",
    isOnline: true,
  },
  {
    id: 2,
    name: "Valyl",
    age: 21,
    city: "Kuiv",
    isOnline: false,
  },
  {
    id: 3,
    name: "Andriy",
    age: 26,
    city: "Kolomya",
    isOnline: true,
  },
  {
    id: 4,
    name: "Danya",
    age: 30,
    city: "Dnipro",
    isOnline: false,
  },
  {
    id: 1,
    name: "Petro",
    age: 29,
    city: "Lviv",
    isOnline: true,
  },
  {
    id: 2,
    name: "Valyl",
    age: 21,
    city: "Kuiv",
    isOnline: false,
  },
  {
    id: 3,
    name: "Andriy",
    age: 26,
    city: "Kolomya",
    isOnline: true,
  },
  {
    id: 4,
    name: "Danya",
    age: 30,
    city: "Dnipro",
    isOnline: false,
  },
];


export default function App() {
  return (
    <main className= {css.container}>
      <h1>Список користувачів</h1>
      <div className={css.users}> 
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
    
  );
}


