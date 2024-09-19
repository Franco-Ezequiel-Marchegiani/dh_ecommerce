import React from "react";

export const CardCredit = () => {
  return(
    <div>
        <div>
            {/* Cards */}
        </div>
        <form action="">
            <div>
                <label htmlFor="number">Card Number</label>
                <input type="text" name="number" id="number"/>
            </div>
            <div>
                <label htmlFor="name">Card Name</label>
                <input type="text" name="name" id="name"/>
            </div>
        </form>

        {/* AÑADIR VALIDACIONES! */}

        {/* Grupo */}
        <div>
            <div>
                <label htmlFor="expiry">Card Expiry</label>
                <input type="text" name="expiry" id="expiry"/>
            </div>
            <div>
                <label htmlFor="cvc">Card CVC</label>
                <input type="text"  name="cvc" id="cvc"/>
            </div>
        </div>

    </div>
  );
};
