package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.DiagnosticMedecinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.Diagnostic;
import com.ird.faa.ws.rest.provided.converter.DiagnosticConverter;
import com.ird.faa.ws.rest.provided.vo.DiagnosticVo;

@Api("Manages diagnostic services")
@RestController
@RequestMapping("api/medecin/diagnostic")
public class DiagnosticRestMedecin {

@Autowired
private DiagnosticMedecinService diagnosticService;

@Autowired
private DiagnosticConverter diagnosticConverter;


            @ApiOperation("Updates the specified  diagnostic")
            @PutMapping("/")
            public  DiagnosticVo update(@RequestBody  DiagnosticVo  diagnosticVo){
            Diagnostic diagnostic = diagnosticConverter.toItem(diagnosticVo);
            diagnostic = diagnosticService.update(diagnostic);
            return diagnosticConverter.toVo(diagnostic);
            }

    @ApiOperation("Finds a list of all diagnostics")
    @GetMapping("/")
    public List<DiagnosticVo> findAll(){
        return diagnosticConverter.toVo(diagnosticService.findAll());
    }

    @ApiOperation("Finds a diagnostic with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DiagnosticVo findByIdWithAssociatedList(@PathVariable Long id){
    return diagnosticConverter.toVo(diagnosticService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search diagnostic by a specific criteria")
    @PostMapping("/search")
    public List<DiagnosticVo> findByCriteria(@RequestBody DiagnosticVo diagnosticVo){
        return diagnosticConverter.toVo(diagnosticService.findByCriteria(diagnosticVo));
        }

            @ApiOperation("Finds a diagnostic by id")
            @GetMapping("/id/{id}")
            public DiagnosticVo findById(@PathVariable Long id){
            return diagnosticConverter.toVo(diagnosticService.findById(id));
            }

            @ApiOperation("Saves the specified  diagnostic")
            @PostMapping("/")
            public DiagnosticVo save(@RequestBody DiagnosticVo diagnosticVo){
            Diagnostic diagnostic = diagnosticConverter.toItem(diagnosticVo);
            diagnostic = diagnosticService.save(diagnostic);
            return diagnosticConverter.toVo(diagnostic);
            }

            @ApiOperation("Delete the specified diagnostic")
            @DeleteMapping("/")
            public int delete(@RequestBody DiagnosticVo diagnosticVo){
            Diagnostic diagnostic = diagnosticConverter.toItem(diagnosticVo);
            return diagnosticService.delete(diagnostic);
            }

            @ApiOperation("Deletes a diagnostic by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return diagnosticService.deleteById(id);
            }
        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<Diagnostic> findByDossierMedicaleRef(@PathVariable String ref){
        return diagnosticService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return diagnosticService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<Diagnostic> findByDossierMedicaleId(@PathVariable Long id){
        return diagnosticService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return diagnosticService.deleteByDossierMedicaleId(id);
        }



            }
