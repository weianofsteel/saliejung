import * as React from 'react';
import { IWithGoogleReCaptchaProps } from './with-google-recaptcha';
export interface IGoogleRecaptchaProps {
    onVerify: (token: string) => void | Promise<void>;
    action?: string;
}
declare const WrappedGoogleRecaptcha: React.ComponentType<IGoogleRecaptchaProps & Partial<IWithGoogleReCaptchaProps>>;
export { WrappedGoogleRecaptcha as GoogleReCaptcha };
//# sourceMappingURL=google-recaptcha.d.ts.map