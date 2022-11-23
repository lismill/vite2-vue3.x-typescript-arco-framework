export const useIsPhoneNumber = () => {
  return {
    validator: (v: any, cb: (arg0: string) => void) => {
      if (!/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(v)) {
        cb("请输入正确的手机号");
      }
    },
  };
};
