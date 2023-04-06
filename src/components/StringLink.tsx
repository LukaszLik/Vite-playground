import {TextField} from "@mui/material";
import React, {useEffect} from "react";
import "./StringLink.scss";

export default function StringLink() {
  const [list, setList] = React.useState(["a", "c", "b"]);
  const [linkedList, setLinkedList] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    let objectsList: JSX.Element[] = [];

    list.map((str, idx) => {
      idx === list.length - 1
        ? objectsList.push(
            <>
              <button
                id={idx.toString()}
                onClick={addLink}
                className="addLink-btn"
              />
              <div className="single-link">
                <TextField
                  className="input"
                  id={idx.toString()}
                  placeholder={list[idx]}
                  size="small"
                  variant="standard"
                  onChange={updateList}
                />
              </div>
              <button
                id={(idx + 1).toString()}
                onClick={addLink}
                className="addLink-btn"
              />
            </>
          )
        : objectsList.push(
            <>
              <button
                id={idx.toString()}
                onClick={addLink}
                className="addLink-btn"
              />
              <div className="single-link">
                <TextField
                  className="input"
                  id={idx.toString()}
                  placeholder={list[idx]}
                  size="small"
                  variant="standard"
                  onChange={updateList}
                />
                {/*<p>{str}</p>*/}
              </div>
            </>
          );
    });

    setLinkedList(objectsList);
  }, [list]);

  useEffect(() => {}, [linkedList]);

  function updateList(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(`${e.target.value} ${e.target.id}`);

    let newList = list.map((value, idx) => {
      if (Number(e.target.id) === idx) {
        value = e.target.value;
      }
      return value;
    });

    console.log(newList);
    setList(newList);
  }
  function addLink(event: React.MouseEvent<HTMLButtonElement>) {
    let newList = [];

    if (event.currentTarget.id === "0") {
      newList.push("x");
      list.map((str, idx) => newList.push(str));
      setList(newList);
    } else if (event.currentTarget.id === list.length.toString()) {
      list.map((str, idx) => newList.push(str));
      newList.push("x");
      setList(newList);
    } else {
      const len = list.length;
      newList = list.slice(0, Number(event.currentTarget.id));
      newList.push("x");
      list.slice(Number(event.currentTarget.id), len).map((elem, idx) => {
        newList.push(elem);
      });
      setList(newList);
    }
  }

  return (
    <>
      <div className="main-div">
        {linkedList.map((obj, idx) => {
          return obj;
        })}
      </div>
      <p className="counter">{linkedList.length}</p>
      <p>
        Total string: {list.reduce((str: string, elem) => (str += elem), "")}
      </p>
    </>
  );
}
