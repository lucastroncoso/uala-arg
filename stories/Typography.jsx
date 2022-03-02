
export const Typography = ({ content, ...props }) => {
  return (
    <div>
        <h1>Tipografías</h1>

        <div className="border-2 m-2 p-2">
            <p className="title-1">Titulo 1: title-1</p>
            <p className="title-1">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">
            <p className="subtitle-1">Subtitulo 1: subtitle-1</p>
            <p className="subtitle-1">{content}</p>
        </div>
        <div className="border-2 m-2 p-2 bg-gray-500">        
            <p className="title-gaming-1">Titulo gaming 1: title-gaming-1</p>
            <p className="title-gaming-1">{content}</p>
        </div>
        <div className="border-2 m-2 p-2 bg-gray-500">        
            <p className="subtitle-gaming-1">Subtitulo gaming 1: subtitle-gaming-1</p>
            <p className="subtitle-gaming-1">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="title-2">Titulo 2: title-2</p>
            <p className="title-2">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="title-extracciones">Titulo extracciones: title-extracciones</p>
            <p className="title-extracciones">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="title-3">Titulo 3: title-3</p>
            <p className="title-3">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="title-gaming-2 ">Titulo gaming 2: title-gaming-2 </p>
            <p className="title-gaming-2 ">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="subtitle-2">Subtitulo 2: subtitle-2</p>
            <p className="subtitle-2">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="subtitle-gaming-2">Subtitulo gaming 2: subtitle-gaming-2</p>
            <p className="subtitle-gaming-2">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="subtitle-blue">Subtitulo azul: subtitle-blue</p>
            <p className="subtitle-blue">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="text">Texto: text</p>
            <p className="text">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="link">Hipervinculos: link</p>
            <p className="link">{content}</p>
        </div>
        <div className="border-2 m-2 p-2">        
            <p className="">Texto sin formato</p>
            <p className="">{content}</p>
        </div>
    </div>
  );
};

