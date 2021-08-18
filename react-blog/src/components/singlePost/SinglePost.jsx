import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
        className="singlePostImg"
          src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Umit</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          laborum reiciendis suscipit, recusandae ipsa aperiam, cumque
          blanditiis voluptatem repellat sunt explicabo tempore, fugit magni
          asperiores voluptatibus dicta nobis alias quaerat!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ratione laborum reiciendis
          suscipit, recusandae ipsa aperiam, cumque blanditiis voluptatem
          repellat sunt explicabo tempore, fugit magni asperiores voluptatibus
          dicta nobis alias quaerat!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione laborum reiciendis suscipit, recusandae ipsa
          aperiam, cumque blanditiis voluptatem repellat sunt explicabo tempore,
          fugit magni asperiores voluptatibus dicta nobis alias quaerat!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum
          reiciendis suscipit, recusandae ipsa aperiam, cumque blanditiis
          voluptatem repellat sunt explicabo tempore, fugit magni asperiores
          voluptatibus dicta nobis alias quaerat!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione laborum reiciendis suscipit,
          recusandae ipsa aperiam, cumque blanditiis voluptatem repellat sunt
          explicabo tempore, fugit magni asperiores voluptatibus dicta nobis
          alias quaerat!
        </p>
      </div>
    </div>
  );
}
