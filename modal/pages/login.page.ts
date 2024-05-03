import { Locator } from "@playwright/test";
import { PageBase } from "./base.page";

export class PageLogin extends PageBase {
  public get getToAccessBtn(): Locator {
    return this.page.locator("button.btAccess");
  }

  //definetely need to use attributes
  public get getPasswordInput(): Locator {
    return this.page.getByLabel("Contraseña");
  }

  //definetely need to use attributes
  public get getUsernameInput(): Locator {
    return this.page.getByRole("textbox", {
      name: "Usuario / Correo electrónico",
    });
  }

  //definetely need to use attributes
  public get getUsernameLogginInValue(): Locator {
    return this.page.getByRole("button", { name: "testproes2405" });
  }

  public get getToAccessButton(): Locator {
    return this.page.locator("//*[@id='btnaccess']/span");
  }

  public get getAccessButton(): Locator {
    return this.page.locator("#btnaccess");
  }

  public get getLoginAlert(): Locator {
    return this.page.getByText("Revisa que todos los campos estén rellenos");
  }
}
