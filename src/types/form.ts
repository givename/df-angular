export type FormFormatProps = {
  header: {
    title: string;
  };
  input: {
    label: string;
  };
  button: {
    msgclick: string;
  };
  container: {
    title?: string;
    elements: FormFormatElement[];
  };
};

export type FormType = keyof FormFormatProps;

export type FormFormatElement = {
  [key in FormType]: {
    id: string;
    type: key;
    props: FormFormatProps[key];
  };
}[FormType];

export type FormFormat = {
  format: FormFormatElement[];
};
