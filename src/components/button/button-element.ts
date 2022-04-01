import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import IceElement from "../base/base-element";

import ButtonVariant from "./button-variant";
import buttonElementStyle from "./button-element.css?inline";

/**
 * IceButton (`ice-button`) provides an extension of `HTMLButton` with two
 * variants: `Primary` and `Secondary`. 
 */
@customElement("ice-button")
class IceButtonElement extends IceElement {

    /** Disables the button. */
    @property({ type: Boolean })
    isDisabled = false;

    /** Sets the variant of the button (default is `Primary`). */
    @property()
    variant = ButtonVariant.Primary;

    static styles = unsafeCSS(buttonElementStyle);

    render() {
        const disabled = this.isDisabled ? "disabled" : "";
        
        return html`
            <button class="button ${this.variant} ${disabled}}">
                <p>
                    <slot></slot>
                </p>
            </button>
        `;
    }
}

export default IceButtonElement;