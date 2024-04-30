export const runtimeTrue = {
  plugins: {
    handlebars: {
      include: {
        runtime: true
      }
    }
  }
};

export const runtimeFalse = {
  plugins: {
    handlebars: {
      include: {
        runtime: false
      }
    }
  }
};

export const runtimeFalseOptimizedTrue = {
  plugins: {
    handlebars: {
      include: {
        runtime: false
      }
    }
  },
  optimize: true
};

export const runtimeTrueAmdTrue = {
  plugins: {
    handlebars: {
      include: {
        runtime: true,
        amd: true
      }
    }
  }
};

export const runtimeTrueOptimizeTrue = {
  plugins: {
    handlebars: {
      include: {
        runtime: true
      }
    }
  },
  optimize: true
};

export const runtimeTrueAmdTrueOptimizeTrue = {
  plugins: {
    handlebars: {
      include: {
        runtime: true,
        amd: true
      }
    }
  },
  optimize: true
};

export const amdTrue = {
  plugins: {
    handlebars: {
      include: {
        amd: true,
        runtime: false
      }
    }
  }
};

export const amdTrueOptimizeTrue = {
  plugins: {
    handlebars: {
      include: {
        amd: true,
        runtime: false
      }
    }
  },
  optimize: true
};

export const amdFalse = {
  plugins: {
    handlebars: {
      include: {
        amd: false,
        runtime: false
      }
    }
  }
};

export const globalNamespaceString = {
  plugins: {
    handlebars: {
      namespace: 'JST.Sub'
    }
  }
};

export const globalNamespaceFunction = {
  plugins: {
    handlebars: {
      namespace: filePath => 'test_templates'
    }
  }
};

export const compileStaticWitData = {
  plugins: {
    handlebars: {
      locals: {
        title: 'Brunch is awesome!'
      }
    }
  }
};
