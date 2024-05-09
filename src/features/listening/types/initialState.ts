export default interface ListeningInitialState {
  isLoggedIn: boolean;
  enabled: boolean;
  kidId: string | null;
  deviceToken: string | null;
  recording: string | null;
  isTriggerDetected: boolean;
}
