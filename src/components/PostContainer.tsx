import React from "react";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";
import { IPost } from "../models/IPost";

export const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Добавить пост</button>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Ошиб очка</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              update={handleUpdate}
              remove={handleRemove}
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};
