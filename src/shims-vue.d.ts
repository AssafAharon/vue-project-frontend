/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'wave-ui' {
  import Vue, { PluginFunction } from 'vue';

  interface Colors {
    primary?: string;
    secondary?: string;
  }

  interface Breakpoints {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  }

  interface Presets {
    sm?: boolean;
    outlined?: boolean;
    round?: boolean;
  }

  interface ConstructorOptions {
    colors?: Colors;
    breakpoints?: Breakpoints;
    presets?: Presets;
  }

  export declare class WaveUI extends Vue {

    constructor(app, options?: ConstructorOptions);
    static install: PluginFunction<unknown>;
    static version: string;
  }

  declare module 'vue/types/options' {
    import Vue, { ComponentOptions } from 'vue';
    export interface ComponentOptions<
      V extends Vue,
      Data = DefaultData<V>,
      Methods = DefaultMethods<V>,
      Computed = DefaultComputed,
      PropsDef = PropsDefinition<DefaultProps>,
      Props = DefaultProps> {
        waveui?: WaveUI
    }
  }

  export default WaveUI;
}