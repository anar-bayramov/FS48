import { useParams } from "react-router-dom";

function BlogDetail() {
    const { id } = useParams();
    const blog = [
        { id: 1, title: "React oyrenirem" },
        { id:2, title:"Router ne ucun lazimdir?"}
    ]

    const selectBlog = blog.find((i)=> i.id === Number(id))

  return (
    <div>
      <h1>Blog detalları</h1>
      <h2>Blog ID: {id}</h2>
      {selectBlog ? (
        <div>
          <h4>{selectBlog.title}</h4>
        </div>
      ) : (
        <h3>Blog tapilmadi</h3>
      )}
    </div>
  );
}

export default BlogDetail;
