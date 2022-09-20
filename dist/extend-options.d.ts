import type { IPluginRefOptions } from 'gatsby';
interface GatsbyPluginMdxOptions extends IPluginRefOptions {
    extensions: string[];
    gatsbyRemarkPlugins: any[];
    mdxOptions: Partial<MdxOptions>;
}
interface MdxOptions {
    remarkPlugins: any[];
    remarkRehypeOptions: object;
    rehypePlugins: any[];
    recmaPlugins: any[];
}
export declare function extendOptions(options: Partial<GatsbyPluginMdxOptions> | undefined): GatsbyPluginMdxOptions;
export declare function extendMdxOptions(options: Partial<MdxOptions> | undefined): MdxOptions;
export {};
