import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images } from "constants/images";
import Rate from "./Rate";
import { commentInitialValues } from "formik/user";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { handlePostComment } from "../productThunk";
import { selectAccountDetail } from "features/users/account/accountSlice";
import styles from "./styles/Comment.module.css";

export default function Comment({ id }) {
  const dispatch = useDispatch();
  const account = useSelector(selectAccountDetail);
  console.log("🚀 ~ file: Comment.jsx:17 ~ Comment ~ account", account);
  // const [value, setValue] = useState(2);

  // const newDate = new Date(account.orders[0].createDate);
  // console.log("🚀 ~ file: Comment.jsx:21 ~ Comment ~ newDate", newDate);
  return (
    <div>
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
            <Form id="cmt_form" className={styles.my_cmt}>
              <div className={styles.cmt_info}>
                <div className={styles.avatar}>
                  <img
                    src={
                      account && account.avatarUrl
                        ? account.avatarUrl
                        : Images.avatar1
                    }
                    alt="avatar"
                  />
                </div>

                <Rate setFieldValue={setFieldValue} />

                <span className={styles.name}>
                  {account && account.name ? account.name : "Guest"}
                </span>
              </div>
              <div className={styles.text_area}>
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
              <span className={styles.warn}>
                Your review will be on public.
                <FontAwesomeIcon
                  className={styles.icon}
                  size="1x"
                  icon={faInfoCircle}
                  style={{ color: "#000" }}
                />
              </span>
              <div className={styles.submit}>
                {/* <button type="button" className={styles.cancel}>
                  Cancel
                </button>

                <button
                  disabled={isSubmitting || !isValid || !dirty}
                  className={styles.send}
                  type="submit"
                >
                  Send
                </button> */}

                <Button
                  sx={{ bgcolor: "red" }}
                  type="button"
                  variant="contained"
                >
                  Cancel
                </Button>

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
    </div>
  );
}
