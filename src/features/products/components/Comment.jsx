import "./styles/Comment.css";

import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { Images } from "constants/images";
import InfoIcon from "@mui/icons-material/Info";
import Rate from "./Rate";
import { commentInitialValues } from "formik/user";
import { handlePostComment } from "../productThunk";
import { selectAccountDetail } from "features/account/accountSlice";

export default function Comment({ id }) {
  const dispatch = useDispatch();
  const account = useSelector(selectAccountDetail);

  return (
    <Formik
      initialValues={commentInitialValues}
      // validationSchema={validationSchema}
      onSubmit={(values, setSubmitting) =>
        dispatch(handlePostComment(values, id))
      }
    >
      {(formikProps) => {
        const { setFieldValue, isSubmitting, isValid, dirty } = formikProps;

        return (
          <Form className="my_cmt">
            <div className="cmt_info">
              <div className="avatar">
                <img
                  src={
                    account && account.avatarUrl
                      ? account.avatarUrl
                      : Images.avatar1
                  }
                  alt="avatar"
                />
              </div>

              <div className="text">
                <span className="name">
                  {account && account.name ? account.name : "Guest"}
                </span>

                <Rate setFieldValue={setFieldValue} />
              </div>
            </div>
            <div className="text_area">
              <Field
                as="textarea"
                name="comment"
                placeholder="Write your comment"
                id="my_cmt"
                cols="50"
                rows="10"
                spellCheck="false"
                required
              />
            </div>
            <span className="warn">
              Your review will be on public.
              <InfoIcon />
            </span>
            <div className="submit">
              <Button
                sx={{ bgcolor: "#eda80a" }}
                disabled={!account && (isSubmitting || !isValid || !dirty)}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
