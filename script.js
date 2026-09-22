function openWhatsApp(productName) {
    // আপনার হোয়াটসঅ্যাপ নম্বর
    let phoneNumber = "8801929138625"; 
    
    let message = `আসসালামু আলাইকুম, আমি FR Premium Store থেকে "${productName}" নিতে চাই। বিস্তারিত জানালে উপকৃত হব।`;
    
    let encodedMessage = encodeURIComponent(message);
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}
