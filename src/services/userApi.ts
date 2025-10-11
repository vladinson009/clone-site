interface UserInput {
  email: string;
  username: string;
  password: string;
  repass: string;
}

export async function registerUser(formData: FormData) {
  const userInput: UserInput = {
    email: formData.get('email') as string,
    username: formData.get('username') as string,
    password: formData.get('password') as string,
    repass: formData.get('repass') as string,
  };

  console.log(userInput);
}
