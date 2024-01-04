interface Props {
  name: string;
  type?: "submit" | "button";
  onClick?: () => void
}

const Button = ({ name, type, onClick }: Props) => {
  return <button className="btn btn-primary" onClick={onClick} type={type}>{name}</button>;
};

export default Button;
