// Login.js
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { loginThunk } from "../../store/User/thunk";

export const Login = ({ onSwitchToRegister }) => {
  const classInput = `bg-[#1618230f] px-[20px] py-[12px] w-full transition outline-none rounded-[44px] h-[44px] text-sm font-inter
    border dark:border-slate-700 dark:focus:border-slate-400 
    focus:border-slate-400  border-slate-200 `;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetchingLogin, userLogin } = useSelector((state) => state.quanLyNguoiDung);

  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (value) => {
    dispatch(loginThunk(value))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userLogin) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <div className="">
        <img
          className="mx-auto w-[70px] h-[50px]"
          src='https://elearning.iigvietnam.com/images/logo.png'
          alt="logo"
        />
        <h1 className="hidden sm:block text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng nhập vào IIG
        </h1>
        <h1 className="block sm:hidden text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng nhập
        </h1>
      </div>
      <div className="mt-11">
        <Form layout={"vertical"} autoComplete="off" onFinish={handleSubmit(onSubmit)}>
          {/* TÀI KHOẢN */}
          <Form.Item
            name="username"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.username ? 'error' : ''}
            help={errors.username ? errors.username.message : null}
          >
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: 'Tài khoản là bắt buộc' }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  prefix={<UserOutlined />}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  placeholder="Tài khoản"
                  autoComplete="username"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* MẬT KHẨU */}
          <Form.Item
            name="password"
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password ? errors.password.message : null}
          >
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Mật khẩu là bắt buộc' }}
              render={({ field }) => (
                <Input.Password
                  className={classInput}
                  prefix={<KeyOutlined />}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  placeholder="Mật khẩu"
                  autoComplete="current-password"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* BUTTON */}
          <Form.Item className="mt-[20px] flex justify-center">
            <Button 
              className="font-semibold hover:bg-green-300 text-white cursor-pointer bg-green-400" 
              loading={isFetchingLogin} 
              htmlType="submit"
            >
              <span>Đăng nhập</span>
            </Button>
          </Form.Item>

          <div className="flex items-center py-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Thử với tài khoản có sẵn
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          <div className="flex gap-5 items-center">
            <Button className="w-full px-0 !border-slate-500">
              Khách hàng
            </Button>
            <Button className="w-full px-0 !border-slate-500">
              Quản trị
            </Button>
          </div>
        </Form>
      </div>
      <div className="mt-11">
        <p className="text-center text-base">
          <span>Bạn chưa có tài khoản? </span>
          <span className="font-semibold text-primary hover:text-primary_hover active:text-primary_active cursor-pointer" onClick={onSwitchToRegister}>
            Đăng ký
          </span>
        </p>
        <p className="text-center text-base">
          <Link
            to="/register"
            className="font-semibold text-primary hover:text-primary_hover active:text-primary_active"
          >
            Quên mật khẩu
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
