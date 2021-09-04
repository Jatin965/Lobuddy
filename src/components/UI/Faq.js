import React from "react";

import { Collapse, Select } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div>
      <Collapse
        expandIcon={({ isActive }) =>
          !isActive ? <PlusOutlined /> : <MinusOutlined />
        }
        expandIconPosition="right"
        bordered={false}
      >
        <Panel header="In what condition are products in?" key="1">
          <p>
            We are Lobuddy, we rent products which are new or as good as new.
            Before products are rented out again, they undergoes detailed
            quality check to gives you best product and make your renting
            experience flawless. If you are not satisfied with product you can
            simply return it at delivery time right away.
          </p>
        </Panel>

        <Panel
          header="What Documents Do I Require For Renting The Item?"
          key="2"
        >
          <p>
            You will need some basic documents related ID and Address to collect
            your delivery ( Aadhar Card or any ID and Electricity Bill ){" "}
          </p>
        </Panel>

        <Panel header="How safe is my data?" key="3">
          <p>
            Don't worry buddy, Your data will never be shared not even with us.
            we suggest our customers to reset the factory setting before you
            return the product. If somehow you forgot to do it, our team will
            reset factory setting and remove all your personal data without
            opening a single file.
          </p>
        </Panel>

        <Panel
          header="When does the rent begin and end?
"
          key="4"
        >
          <p>
            The delivery date determines the recurring monthly payment date.
            Rental period does not officially start until you receive your
            product.{" "}
          </p>
        </Panel>

        <Panel
          header="What if my device gets damaged during the rental period?
"
          key="5"
        >
          <p>
            First of all, Of course there are no charges for device errors from
            the manufacturer. If something bad happens during your rental, Don't
            worry we will make sure that will be easy on your pocket. We pay for
            70% of the repair costs for damages of all kinds, including breakage
            of display, water damage, and technical defects. SO, ENJOY BUDDY.
          </p>
        </Panel>

        <Panel
          header="Do I have to worry about signs of use?
"
          key="6"
        >
          <p>
            Don’t worry buddy, we want you to enjoy your products as though they
            were yours. Small scratches and normal signs of use will be cleaned
            after free return.
          </p>
        </Panel>

        <Panel
          header="Can I also buy a product I'm renting?
"
          key="7"
        >
          <p>
            Of course buddy, You can purchase a product whenever you want. 70%
            of you rented amount will be deducted from total amount of product.
            It all yours.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Faq;
