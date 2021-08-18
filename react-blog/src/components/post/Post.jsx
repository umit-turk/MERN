import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet .</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis
        id unde, deleniti reprehenderit ratione vitae earum esse tenetur libero.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem libero
        placeat magnam suscipit ipsa officia cupiditate perferendis, nihil
        quisquam, iusto consequatur exercitationem corrupti ducimus quo?
      </p>
    </div>
  );
}
