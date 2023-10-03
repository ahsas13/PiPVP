//Задание 1. Экспортируйте компонент. Примените экспорт по умолчанию
/* 
function Profile() {
  return (
  <img
  src="https://i.imgur.com/lICfvbD.jpg"
  alt="Aklilu Lemma"
  />
  );
  }
export default Profile;
*/
//Задание 2. Исправьте оператор return (возврата)
/*
export default function Profile() {
  return (
  <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
  );  
}
*/
// Задание 3. Найдите и исправьте ошибку
/*
function Profile() {
  return (
  <img
  src="https://i.imgur.com/QIrZWGIs.jpg"
  alt="Alan L. Hart"
  />
  );
  }
  export default function Gallery() {
    return (
    <section>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
    </section>
    );
    }
*/
//Задание 4.Напишите Congratulations компонент, который возвращает текст <h1>Good job!</h1>. Выполните именованный экспорт.
/*
function Congratulations() {
  return <h1>Good Job!</h1>;
}
export default Congratulations;
*/
// Задание 5. Нижеприведенный код выдает ошибку Objects are not valid as a React child…
/*
const person = {
  name: 'Брендан Эйх',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name} – создатель языка программирования JS</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
*/
// Задание 6. Переместите URL-адрес изображения в person объект. Используйте соответствующее поле с URL-адресом в качестве значения атрибута src тега img
/* 
const person = {
  name: 'Gregorio Y. Zara',
  avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.avatarUrl}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
*/
// Задание 7. Отрегулируйте размер изображения на основе реквизита. В этом примере Avatar получает числовой size реквизит, определяющий <img>ширину и высоту. Измените Avatar
// компонент, чтобы он запрашивал ближайший размер изображения на основе реквизита size. В частности, если size меньше 90, передайте в функцию getImageUrl аргумент со значением
// 's'(«маленький»), иначе 'b' («большой»).
/*
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    let s ;
    if (size > 90) {
        s = 'b';
    }
    return (
        <img
            className="avatar"
            src={getImageUrl(person, s)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <>
            <Avatar
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP',
                }}
            />
            <Avatar
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP',
                }}
            />
        </>
    );
}
*/
//Задание 8. Показывать значок ❌ для неупакованных элементов (значением isPacked является false), используя условный оператор ? :
/*
function Item({ name, isPacked }) {
  return (
      <li className="item">
          {name} {isPacked ? '✔' : '❌'}
      </li>
  );
}
export default function PackingList() {
  return (
      <section>
          <h1>Sally Ride's Packing List</h1>
          <ul>
              <Item isPacked={true} name="Space suit" />
              <Item
                  isPacked={true}
                  name="Helmet with a golden leaf"
              />
              <Item
                  isPacked={false}
                  name="Photo of Tam"
              />
          </ul>
      </section>
  );
}
*/
// Задание 9. Исправьте обработчик событий. При нажатии на кнопку фон страницы должен переключаться между белым и черным. Однако при нажатии на нее ничего не происходит.
// Решить проблему. (Не беспокойтесь о внутренней логике handleClick— с этой частью все в порядке.)
/*
export default function LightSwitch() {
  function handleClick() {
  let bodyStyle = document.body.style;
  if (bodyStyle.backgroundColor === 'black') {
  bodyStyle.backgroundColor = 'white';
  } else {
  bodyStyle.backgroundColor = 'black';
  }
  }
  return (
  <button onClick={handleClick}>
  Toggle the lights
  </button>
  );
  }
*/
// Задание 10. Добавьте метод, предотвращающий поведение браузера по умолчанию, перезагрузку страницы

export default function Signup() {
return (
<form>
<input />
<button onClick={() => alert('Submitting!')}>Send</button>
</form>
);
}