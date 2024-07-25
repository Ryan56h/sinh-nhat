function generateMessage() {
    const messages = [
        "Chúc bạn tui có một ngày sinh nhật thật là tuyệt vời nhất cõi đời !!!",
        "Sinh nhật thật là vui vẻ nhá, cho dù sau này có đi đâu thì đừng quên tui nha 🎉🕯🎉🕯🎉🕯🎉.",
        "Chúc cậu có một ngày thật vui, tuổi mới, hạnh phúc mới, đoạn đường mới thật thành công 🎁🎁🎁.",
        "Sau này dù có ra sao thì tui vẫn mong bạn sẽ mãi hạnh phúc với những lựa chọn của mình 🥳🥳🎊🎊. ",
        "Happy birthday to you <33 ¸¸.•¨•♫♪░H░A░P░P░Y░B░I░R░T░H░D░A░Y♪♫•¨•.¸¸♫♪",
        "Chúc bạn tuổi mới xinh càng thêm xinh và duyên sẽ càng thêm duyên💐💐💐",
        "Mãi hạnh phúc bên cạnh những người thân yêu của bạn nha !!!",
        "Hãy luôn lạc quan và mang thật nhiều tiếng cười đến mọi người hơn nữa nháa!!!",
        "“Sinh nhật vui vẻ nhé bạn tui! Cảm ơn bạn đã luôn ở bên cạnh tui trong mọi khoảnh khắc. Chúc bạn luôn xinh đẹp, rạng rỡ và có một cuộc sống thật viên mãn.”",
        "Cảm ơn bạn đã là một người bạn tuyệt vời! Chúc bạn sinh nhật vui vẻ!“",
    ];


    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    document.getElementById("message").innerText = message;
}