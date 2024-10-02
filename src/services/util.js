

export const generateThumbnailFromText = (text) => {
    return `https://placehold.co/356x215/776002/white?text=${text.slice(0,1)}`;
}

export const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export function getDayFromDate(dateString) {
    const date = new Date(dateString);
    return date.getDate();
}

export function getMonthFromDate(dateString) {
    const date = new Date(dateString);
    return monthNames[date.getMonth()].slice(0, 3);
}

export function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear().toString().slice(-2);
}

export function getFullYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function getBlogDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}-${getMonthFromDate(dateString)}-${date.getFullYear()}`;
}

export function formatMoney(money) {
    return new Intl.NumberFormat().format(money);
}

export const createContactEmailTemplate = ({fullName, phoneNumber, email, companyName, country, service, message}) => {
    return `
    <h1>Contact Form Submission</h1>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${companyName}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <div>${message}</div>
    `;
};


export const createOrderEmailTemplate = ({ firstName, lastName, email, country, state, city, address, items,totalAmount,numberOfItems, reference, order_id }) => {
    let itemsHTML = '';

    items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        itemsHTML += `
        <tr style="font-size: 14px;">
            <td style="padding: 5px; border: 1px solid black;">${item.title}</td>
            <td style="padding: 5px; border: 1px solid black;">${item.variation}</td>
            <td style="padding: 5px; border: 1px solid black;">#${item.price.toFixed(2)}</td>
            <td style="padding: 5px; border: 1px solid black;">${item.quantity}</td>
            <td style="padding: 5px; border: 1px solid black;">#${itemTotal.toFixed(2)}</td>
        </tr>`;
    });

    return `
    <div style="font-family: Arial, sans-serif; padding: 5px; max-width: 600px; margin: 0 auto;">
        
        <h2 style="text-align: center;">Order Confirmation</h2>
         <p>
        <strong>Order Reference:</strong> ${reference}
        </p>
         <p>
        <strong>Order ID:</strong> ${order_id}
        </p>
        <p>
        <strong>Total Order Price:</strong> ${totalAmount}
        </p>
        <p>
        <strong>Total Number Of Items:</strong> ${numberOfItems}
        </p>
        <!-- Items Purchased Section -->
        <h3>Items Purchased</h3>
        <table width="100%" style="border-collapse: collapse; text-align: left; font-size: 12px;">
            <thead style="">
                <tr>
                    <th style="border: 1px solid black; padding: 5px;">Product Name</th>
                    <th style="border: 1px solid black; padding: 5px;">Variation</th>
                    <th style="border: 1px solid black; padding: 5px;">Price</th>
                    <th style="border: 1px solid black; padding: 5px;">Quantity</th>
                    <th style="border: 1px solid black; padding: 5px;">Total</th>
                </tr>
            </thead>
            <tbody style="font-size: 12px;">
                ${itemsHTML}
            </tbody>
        </table>

        <!-- Order Summary Section -->
        <h3 style="margin-top: 20px;">Order Summary</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Delivery Address:</strong> ${address}</p>
    </div>
    `;
};
