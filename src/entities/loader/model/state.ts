import { LoadingStatus } from "types/enum";

export interface LoaderState {
  isLoading: boolean;
  status: LoadingStatus;
}
