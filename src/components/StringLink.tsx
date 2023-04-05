import React, { useEffect } from "react";
import "./StringLink.scss";

export default function StringLink() {
  const [list, setList] = React.useState(["a", "c", "b"]);
  const [linkedList, setLinkedList] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    let objectsList: JSX.Element[] = [];

    list.map((str, idx) => {
      objectsList.push(
        <>
          <button
            id={idx.toString()}
            onClick={addLink}
            className="addLink-btn"
          />
          <div className="single-link">
            <p>{str}</p>
          </div>
        </>
      );
    });
    objectsList.push(
      <button
        id={objectsList.length.toString()}
        onClick={addLink}
        className="addLink-btn"
      />
    );
    setLinkedList(objectsList);
  }, []);

  function addLink(event: React.MouseEvent<HTMLButtonElement>) {
    let newList = [...list];
    console.log(event.currentTarget.id);
  }

  return (
    <div className="main-div">
      {linkedList.map((obj, idx) => {
        return obj;
      })}
    </div>
  );
}
