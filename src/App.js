import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [list, setList] = useState([
    { id: 1, title: "Title", detail: "Detail", isDone: false },
    { id: 2, title: "Title2", detail: "Detail2", isDone: true },
    { id: 3, title: "Title3", detail: "Detail3", isDone: false },
  ]);
  console.log(list);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      detail,
      isDone: false,
    };
    setList([...list, newTodo]);
    setTitle("");
    setDetail("");
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form>
        <span>제목</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>내용</span>
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button onClick={onSubmitHandler}>등록</button>
      </form>
      <h3>할 일 🥺</h3>
      <div className="container">
        {list
          .filter((done) => {
            return done.isDone === false;
          })
          .map((item) => {
            return (
              <div key={item.id} className="todocard">
                <p>{item.title}</p>
                <p>{item.detail}</p>
                <div>
                  <button
                    onClick={() => {
                      const doneTodo = list.map((e) => {
                        if (item.id === e.id) {
                          return { ...e, isDone: !e.isDone };
                        } else {
                          return e;
                        }
                      });
                      setList(doneTodo);
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      const deleteTodo = list.filter((e) => {
                        return item.id !== e.id;
                      });
                      setList(deleteTodo);
                      // const deleteTodo = list.filter((delete) => {
                      //   return delete.id !== item.id;
                      // });
                      // setList(deleteTodo);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <h3>한 일 🥰</h3>
      <div className="container">
        {list
          .filter((done) => {
            return done.isDone === true;
          })
          .map((item) => {
            return (
              <div key={item.id} className="todocard">
                <p>{item.title}</p>
                <p>{item.detail}</p>
                <div>
                  <button
                    onClick={() => {
                      const doneTodo = list.map((e) => {
                        if (item.id === e.id) {
                          return { ...e, isDone: !e.isDone };
                        } else {
                          return e;
                        }
                      });
                      setList(doneTodo);
                    }}
                  >
                    취소
                  </button>
                  <button
                    onClick={() => {
                      const deleteTodo = list.filter((e) => {
                        return item.id !== e.id;
                      });
                      setList(deleteTodo);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
