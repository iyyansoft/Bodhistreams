import { useState } from "react";

function ChatBot() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      type: "bot",
      text: "Hi 👋 How can I help you?"
    }
  ]);

  // Suggested Questions
  const suggestions = [
    "About Bodhi Streams",
    "What services do you provide?",
    "Networking services",
    "Contact details",
    "IT consulting",
    "Hardware support"
  ];

  // SMART ANSWER FUNCTION
  const getAnswer = (question) => {

    // ONLY WEBSITE CONTENT
    const websiteText =
      document.getElementById("website-content")?.innerText || "";

    // Split website content
    const paragraphs = websiteText
      .split("\n")
      .filter((p) => p.trim().length > 20);

    // User question words
    const questionWords = question
      .toLowerCase()
      .split(" ");

    let matchedParagraphs = [];

    // SEARCH LOGIC
    paragraphs.forEach((para) => {

      let score = 0;

      questionWords.forEach((word) => {

        if(
          para.toLowerCase().includes(word)
        ){
          score++;
        }

      });

      // Save matching paragraphs
      if(score > 0){

        matchedParagraphs.push({
          text: para,
          score: score
        });

      }

    });

    // Sort best matches
    matchedParagraphs.sort(
      (a,b)=> b.score - a.score
    );

    // Get top answers
    const topAnswers =
      matchedParagraphs
        .slice(0,4)
        .map((item)=> item.text)
        .join(" ");

    // No answer

    
    if(!topAnswers){

      return `
Sorry, I couldn't find the exact answer.

Please try asking in a different way.
      `;

    }

    return topAnswers;
  };

  // SEND MESSAGE
  const sendMessage = (customQuestion) => {

    const userQuestion =
      customQuestion || message;

    if(!userQuestion) return;

    // USER MESSAGE
    setChat((prev)=>[
      ...prev,
      {
        type:"user",
        text:userQuestion
      }
    ]);

    // BOT ANSWER
    const botReply =
      getAnswer(userQuestion);

    // ADD BOT MESSAGE
    setTimeout(()=>{

      setChat((prev)=>[
        ...prev,
        {
          type:"bot",
          text:botReply
        }
      ]);

    },500);

    setMessage("");
  };

  return (
    <div>

      {/* FLOATING BUTTON */}
      <button
        onClick={()=>setOpen(!open)}
        style={{
          position:"fixed",
          bottom:"20px",
          right:"20px",
          width:"70px",
          height:"70px",
          borderRadius:"50%",
          border:"none",
          background:"linear-gradient(135deg,#00c896,#009e74)",
          color:"white",
          fontSize:"28px",
          cursor:"pointer",
          zIndex:"9999",
          boxShadow:"0 8px 25px rgba(0,200,150,0.4)"
        }}
      >
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (

        <div
          style={{
            position:"fixed",
            bottom:"100px",
            right:"20px",
            width:"380px",
            height:"600px",
            background:"white",
            borderRadius:"25px",
            overflow:"hidden",
            boxShadow:"0 10px 40px rgba(0,0,0,0.2)",
            zIndex:"9999",
            display:"flex",
            flexDirection:"column"
          }}
        >

          {/* HEADER */}
          <div
            style={{
              background:"linear-gradient(135deg,#00c896,#009e74)",
              padding:"20px",
              color:"white"
            }}
          >

            <h3 style={{margin:0}}>
              Bodhi Assistant
            </h3>

            <p style={{marginTop:"5px"}}>
              How can I help you?
            </p>

          </div>

          {/* CHAT MESSAGES */}
          <div
            style={{
              flex:1,
              padding:"15px",
              overflowY:"auto",
              background:"#f5f7fb"
            }}
          >

            {chat.map((msg,index)=>(

              <div
                key={index}
                style={{
                  display:"flex",
                  justifyContent:
                    msg.type === "user"
                    ? "flex-end"
                    : "flex-start",
                  marginBottom:"12px"
                }}
              >

                <div
                  style={{
                    maxWidth:"80%",
                    padding:"12px 16px",
                    borderRadius:"18px",
                    background:
                      msg.type === "user"
                      ? "#00c896"
                      : "white",
                    color:
                      msg.type === "user"
                      ? "white"
                      : "#222",
                    lineHeight:"1.7",
                    boxShadow:"0 2px 8px rgba(0,0,0,0.08)",
                    whiteSpace:"pre-line"
                  }}
                >
                  {msg.text}
                </div>

              </div>

            ))}

          </div>

          {/* SUGGESTIONS */}
          <div
            style={{
              padding:"10px",
              display:"flex",
              gap:"10px",
              overflowX:"auto",
              background:"white",
              borderTop:"1px solid #eee"
            }}
          >

            {suggestions.map((item,index)=>(

              <button
                key={index}
                onClick={()=>sendMessage(item)}
                style={{
                  border:"1px solid #00c896",
                  background:"white",
                  color:"#00c896",
                  borderRadius:"20px",
                  padding:"8px 14px",
                  cursor:"pointer",
                  whiteSpace:"nowrap",
                  fontSize:"14px"
                }}
              >
                {item}
              </button>

            ))}

          </div>

          {/* INPUT AREA */}
          <div
            style={{
              display:"flex",
              padding:"15px",
              gap:"10px",
              borderTop:"1px solid #eee",
              background:"white"
            }}
          >

            <input
              type="text"
              placeholder="Type your question..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key === "Enter"){
                  sendMessage();
                }
              }}
              style={{
                flex:1,
                padding:"14px",
                borderRadius:"30px",
                border:"1px solid #ddd",
                outline:"none",
                fontSize:"15px"
              }}
            />

            <button
              onClick={()=>sendMessage()}
              style={{
                background:"linear-gradient(135deg,#00c896,#009e74)",
                color:"white",
                border:"none",
                padding:"0 22px",
                borderRadius:"30px",
                cursor:"pointer",
                fontWeight:"bold",
                fontSize:"15px"
              }}
            >
              Send
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ChatBot;
