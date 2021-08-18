import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { Button, TextField, Select, Input, MenuItem } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {updatePost} from "../actions/post";

const useStyles = makeStyles((theme) => ({
  textField: {
      marginBottom: theme.spacing(2)
  },
  buttons: {
      marginTop: theme.spacing(2),
  }
}));

const tags = ["fun", "programming", "health", "science"];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});

const EditPostForm = ({ history, post, closeEditMode }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(post?.image);

  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (data) => {
      const updatedPost = {
          _id: post._id,
          ...data,
          image: file
      };
      dispatch(updatePost(post._id, updatedPost))

      reset();
      setFile(null);
      closeEditMode();
  };

  

  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="title"
          label="Başlık"
          name="title"
          variant="outlined"
          className={classes.TextField}
          size="small"
          error={errors.title ? true : false}
          inputRef={register}
          fullWidth
          defaultValue={post?.title}
        />
        <TextField
          id="subtitle"
          label="Alt Başlık"
          name="subtitle"
          variant="outlined"
          className={classes.TextField}
          size="small"
          error={errors.subtitle ? true : false}
          inputRef={register}
          fullWidth
          defaultValue={post?.subtitle}
        />

        <Controller
          as={
            <Select input={<Input />} className={classes.TextField} fullWidth>
              {tags.map((tag, index) => (
                <MenuItem key={index} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          }
          name="tag"
          control={control}
          error={errors.tag ? true : false}
          defaultValue={tags[0]}
          defaultValue={post?.tag}
        />
        <TextField
          id="content"
          label="İçerik"
          name="content"
          multiline
          rows={4}
          variant="outlined"
          className={classes.TextField}
          size="small"
          error={errors.content ? true : false}
          inputRef={register}
          fullWidth
          defaultValue={post?.content}
        />
        <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />

        <div className={classes.buttons}>
          <Button color="primary" variant="outlined" type="submit">
            Kaydet
          </Button>
          <Button color="secondary" variant="outlined" type="submit"  onClick={closeEditMode}>
            Vazgeç
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;