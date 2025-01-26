import { IxContentHeader } from "@siemens/ix-react";

export default () => {
  return (
    <>
      <h1>hallo</h1>
      <IxContentHeader
        slot="header"
        header-title="My Content Page"
      ></IxContentHeader>
    </>
  );
};
