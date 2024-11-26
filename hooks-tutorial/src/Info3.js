import UseInputs from "./UseInput";

const Info3 = () => {
  const [state, onChange] = UseInputs({
    name: "",
    address: "",
  });
  const { name, address } = state;

  return (
    <div>
      <div>
        <label htmlFor="name">이름 : </label>
        <input
          name="name"
          id="name"
          size="14"
          value={name}
          onChange={onChange}
        />
        <br />
        <label htmlFor="address">주소 : </label>
        <input
          name="address"
          id="address"
          size="36"
          value={address}
          onChange={onChange}
        />
      </div>
      <hr />
      <div>
        <div>
          이름 : <b>{name}</b>
        </div>
        <div>
          주소 : <b>{address}</b>
        </div>
      </div>
    </div>
  );
};

export default Info3;
