import css from './UserCard.module.css'


type User = {
    name: string;
    age: number;
    city: string;
    isOnline: boolean;
};


type UserCerdProps = {
    user: User;
};


export default function UserCard ({ user }: UserCerdProps) {
    return (
        <div className={css.card}>
            <h2 className= {css.name}>{user.name}</h2>
            <p>
                <span className= {css.label}>Вік: </span>{user.age}</p>
            <p>
                <span className= {css.label}>Місто: </span>{user.city}</p>
            <p> 
                <span className= {css.lable}>Статус: </span>
                <span className= {user.isOnline ? css.online : css.offline}>{user.isOnline ? "Онлай" : "Офлайн"}</span> 
            </p>
        </div>
    );
}