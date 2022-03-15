import ImageBanner from '../components/imageBanner';

export default {
    component: ImageBanner,
    title: 'ImageBanner',
};

const Template = args => <ImageBanner {...args} />

export const Default = Template.bind({});
Default.args = {
    banner: {
        description: "Homepage hero banner",
        desktopImage: {
          url: "https://images.ctfassets.net/t5yal6u1wvnw/5VY67Xb6l9EG2Zj69xIiZf/b2da9e39d2570444c4abb1ebef3b8f90/hero_web_corporativa-01_1.png",
          width: 2880,
          height: 1174
        },
        mobileImage: {
          url: "https://images.ctfassets.net/t5yal6u1wvnw/dM9XiYWSa0mK8XTdNKVuW/32a6e70001ba79feea2ed297e54d03d0/hero_web_corporativa-02_1.png",
          width: 750,
          height: 789
        }
    }
}
