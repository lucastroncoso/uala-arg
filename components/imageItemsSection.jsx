import Container from './container';

export default function ImageItemsSection(props) {
  return (
    <Container className={props.bg}>
      <a target="_blank" href={props.href}>
        <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-16 justify-items-center relative">
          <div
            className={
              props.reverse
                ? 'order-2 rounded-3xl flex relative'
                : 'order-2 lg:order-none rounded-3xl flex relative'
            }
          >
            <div
              className={
                props.reverse
                  ? 'order-2 rounded-3xl overflow-hidden flex'
                  : 'order-2 lg:order-none rounded-3xl overflow-hidden flex'
              }
            >
              {props.img}
            </div>
            {props.imgHidden && (
              <div className={props.reverse
              ? 'order-2 rounded-3xl overflow-hidden flex hidden md:block'
              : 'order-2 lg:order-none rounded-3xl overflow-hidden flex hidden md:block'
              }>
                {props.imgHidden}
              </div>
            )}
            {props.pushImg && (
              <div>
                <img
                  src={props.pushImg}
                  style={{ height: '112px' }}
                  alt=""
                  className=" lg:bottom-8 lg:-left-24 -bottom-4 hidden lg:flex absolute"
                />
                <img
                  src={props.pushImg}
                  style={{ height: '78px' }}
                  alt=""
                  className="absolute lg:bottom-8 lg:-left-24 -bottom-2 lg:hidden left-2/4 transform -translate-x-1/2 "
                />
              </div>
            )}
          </div>
          <div className="flex flex-col  order-1 ">
            <div>
              {props.title && <h2 className="mb-4 title-2">{props.title}</h2>}
              {props.subtitle && <div className="subtitle-2">{props.subtitle}</div>}
              {props.icons && (
                <div className="flex">
                  {props.icons.map((icon) => {
                    return (
                      <img
                        src={icon}
                        style={{ height: '32px' }}
                        alt=""
                        className=" lg:flex mr-5 mt-4"
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-around h-full lg:mr-12">
              {props.items && props.items.map((i) => i)}
            </div>
          </div>
        </div>
      </a>
    </Container>
  );
}
