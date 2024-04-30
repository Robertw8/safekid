interface Kid {
  id: string;
  userName: string;
}

export default interface ListKidsInitialState {
  kids: Kid[];
  loading: boolean;
  error: string | null;
}
